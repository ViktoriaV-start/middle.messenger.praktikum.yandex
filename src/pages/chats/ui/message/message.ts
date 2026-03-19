// eslint-disable-next-line import/extensions
import clipIcon from '@shared/assets/icons/clip-icon.svg?raw';
// eslint-disable-next-line import/extensions
import sendMessageIcon from '@shared/assets/icons/right-arrow-icon.svg?raw';
import Block from '@shared/lib/block';
import { normalizeValue } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import templateSource from './message.hbs?raw';
import styles from './message.module.css';

export class Message extends Block<Record<string, unknown>> {
  static componentName = 'Message';

  protected template = templateSource;
  private error = false;
  private bgColor = styles['message__input_bg-default'];
  private errorBgColor = styles['message__input_bg-error'];

  constructor() {
    super({ sendMessageIcon, clipIcon, styles });
  }

  public setProps(props: Record<string, unknown>) {
    super.setProps({ ...props });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  resetError = (target: HTMLInputElement) => {
    if (this.error) {
      this.error = false;
      target.classList.remove(this.errorBgColor);
      target.classList.add(this.bgColor);
    }
  };

  private handleInputChange = (target: HTMLInputElement) => {
    const inputValue = target.value.trimStart();
    const inputName = target.name;
    if (inputValue.length === 0) {
      console.warn('Сообщение не может быть пустым');

      this.error = true;
      target.classList.remove(this.bgColor);
      target.classList.add(this.errorBgColor);

      return;
    }
    target.value = normalizeValue({ value: inputValue, name: inputName });

    console.log(inputValue, inputName);
  };

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);

      console.log(formData);
    },
    blur: (event: Event) => {
      const target = event.target as HTMLInputElement;

      this.handleInputChange(target);
    },
    focusin: (event: Event) => {
      const target = event.target as HTMLInputElement;
      this.resetError(target);
    },
  };
}
