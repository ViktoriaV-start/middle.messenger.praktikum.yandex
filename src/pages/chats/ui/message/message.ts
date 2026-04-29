// eslint-disable-next-line import/extensions
import clipIcon from '@shared/assets/icons/clip-icon.svg?raw';
// eslint-disable-next-line import/extensions
import sendMessageIcon from '@shared/assets/icons/right-arrow-icon.svg?raw';
import Block from '@shared/lib/block';
import { normalizeValue } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import { ChatsController, socketController } from '../../api';
import templateSource from './message.hbs?raw';
import styles from './message.module.css';

const COMPONENT_NAME = 'Message';

export class Message extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private error = false;
  private defaultStyle = styles['message__input_bg-default'];
  private errorStyle = styles['message__input_bg-error'];

  constructor() {
    super({ componentName: COMPONENT_NAME, sendMessageIcon, clipIcon, styles });
  }

  public setProps(props: Record<string, unknown>) {
    super.setProps({ ...props });
  }

  resetError = (target: HTMLInputElement) => {
    if (this.error) {
      this.error = false;
      target.classList.remove(this.errorStyle);
      target.classList.add(this.defaultStyle);
    }
  };

  private handleInputChange = (target: HTMLInputElement) => {
    const inputValue = target.value.trimStart();
    const inputName = target.name;

    if (inputValue.length === 0) {
      console.warn('Сообщение не может быть пустым');

      this.error = true;
      target.classList.remove(this.defaultStyle);
      target.classList.add(this.errorStyle);

      return;
    }

    target.value = normalizeValue({ value: inputValue, name: inputName });
  };

  protected events = {
    change: (event: Event) => {
      const fileInfo = document.getElementById('fileInfo');

      const target = event.target as HTMLElement;
      const fileContainer = target.closest<HTMLAnchorElement>('.loading-file');

      if (fileContainer && event.target instanceof HTMLInputElement) {
        const file = event.target?.files?.[0];

        if (file && fileInfo) {
          fileInfo.textContent = `✅ ${file.name}`;
        }

        if (!file && fileInfo) {
          fileInfo.textContent = '';
        }
      }
    },
    submit: async (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);
      const isValueString = typeof formData.message === 'string' && formData.message.length > 0;

      if (isValueString) {
        socketController.sendMessage(formData.message as string);
      }

      if (formData.image && formData.image instanceof File && formData.image.size > 0) {
        const imageFormData = new FormData();
        imageFormData.append('resource', formData.image);

        const file = await ChatsController.sendFile(imageFormData);

        if (file && file.id) {
          socketController.sendFile(String(file.id));
        }
      }
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
