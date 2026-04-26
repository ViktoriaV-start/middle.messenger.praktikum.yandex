import Handlebars from 'handlebars';
import { isEqual } from '@shared/utils';
import type { BlockOwnProps } from '../../types';

type EventListType = Partial<Record<keyof HTMLElementEventMap, (e: Event) => void>>;

export default abstract class Block<Props extends BlockOwnProps = BlockOwnProps> {
  protected abstract template: string;

  protected props = {} as Props;

  public domElement: Element | null = null;

  protected children: Block<object>[] = [];

  protected refs: Record<string, Element> = {};

  protected events: EventListType = {};

  constructor(props: Props = {} as Props) {
    this.props = props;
  }

  public element(): Element | null {
    if (!this.domElement) {
      this.render();
    }

    return this.domElement;
  }

  public setProps(props: Partial<Props>) {
    const hasChanges = Object.keys(props).some((key) => {
      const newValue = props[key as keyof Props];
      const oldValue = this.props[key as keyof Props];

      const areEqualValues = isEqual(newValue, oldValue);

      if (!areEqualValues) {
        console.log(`[${this.constructor.name}] Изменился проп ${key}:`, oldValue, '->', newValue);

        return true;
      }

      return false;
    });

    if (!hasChanges) {
      return;
    }

    this.props = { ...this.props, ...props, __children: [], __refs: {} } as Props;
    this.render();
  }

  protected componentDidMount() {}

  private mountComponent() {
    this.attachListeners();
    this.componentDidMount();
  }

  protected componentWillUnmount() {}

  public unmountComponent() {
    if (this.domElement) {
      this.children.reverse().forEach((child) => child.unmountComponent());

      this.componentWillUnmount();
      this.removeListeners();
    }
  }

  private attachListeners() {
    for (const eventName in this.events) {
      const eventCallback = this.events[eventName as keyof HTMLElementEventMap];

      if (typeof eventCallback == 'function' && this.domElement) {
        if (eventName === 'blur') {
          this.domElement.addEventListener(eventName, eventCallback, true);
        } else {
          this.domElement.addEventListener(eventName, eventCallback);
        }
      }
    }
  }

  private removeListeners() {
    for (const eventName in this.events) {
      const eventCallback = this.events[eventName as keyof HTMLElementEventMap];

      if (typeof eventCallback === 'function' && this.domElement) {
        this.domElement.removeEventListener(eventName, eventCallback);
      }
    }
  }

  public render() {
    this.unmountComponent();
    this.children = [];

    const fragment = this.compile();

    if (this.domElement && fragment) {
      this.domElement.replaceWith(fragment);
    }

    this.domElement = fragment;
    this.mountComponent();
  }

  private compile(): Element | null {
    this.props.__children = [];
    this.props.__refs = {};

    const html = Handlebars.compile(this.template)(this.props);
    const templateElement = document.createElement('template');
    templateElement.innerHTML = html;
    const fragment = templateElement.content;

    if (this.props.__children) {
      this.children = this.props.__children.map((child) => child.component);

      this.props.__children.forEach((child) => {
        child.embed(fragment);
      });
    }

    const defaultRefs = this.props?.__refs ?? {};
    this.refs = Array.from(fragment.querySelectorAll('[ref]')).reduce((list, element) => {
      const key = element.getAttribute('ref') as string;
      list[key] = element as HTMLElement;
      element.removeAttribute('ref');

      return list;
    }, defaultRefs);

    return templateElement.content.firstElementChild;
  }
}
