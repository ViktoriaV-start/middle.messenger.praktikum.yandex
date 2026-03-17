import Block from '@shared/lib/block';
import { resolveRoute, navigate } from './router';
import './styles/app.css';
import './styles/app.css';
import './styles/variables.css';

export default class App extends Block<object> {
  protected template: string;

  constructor() {
    super();
    this.template = resolveRoute();
    window.addEventListener('popstate', () => this.rerender());
  }

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      // console.log((this.refs.login as HTMLInputElement).value);
    },
    click: (event: Event) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest<HTMLAnchorElement>('.navigation-link');

      if (!linkElement) {
        return;
      }

      event.preventDefault();
      navigate(linkElement.pathname);
      this.rerender();
    },
  };

  private rerender() {
    this.template = resolveRoute();
    this.render();
  }

  componentDidMount() {
    // setTimeout(() => this.setProps({ buttonName: 'Клик через 3 секунды!' }), 3000);
  }

  protected componentWillUnmount() {
    window.removeEventListener('popstate', () => this.rerender());
  }
}
