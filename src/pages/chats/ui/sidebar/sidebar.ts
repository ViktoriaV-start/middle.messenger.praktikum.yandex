import { URLS } from '@shared/constants';
import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { ApiError, newChatData } from '@shared/types';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { ChatsApi, ChatsController } from '../../api';
import templateSource from './sidebar.hbs?raw';
import styles from './sidebar.module.css';

const COMPONENT_NAME = 'Sidebar';

export class Sidebar extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;
  private router = store.getState().router;

  protected template = templateSource;

  constructor() {
    const data = {
      chats: store.getState().chats,
      urls: URLS,
    };
    super({ ...data, componentName: COMPONENT_NAME, styles });

    store.subscribe(() => {
      this.setProps({ chats: store.getState().chats });
    });
  }

  private handleSubmit = async (newChat: newChatData): Promise<boolean> => {
    try {
      const response = await ChatsApi.create(newChat);

      if (response) {
        return true;
      }
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        this.router.go(URLS.serverError);
      }
    }

    return false;
  };

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();

      const newChatRaw = getFormData(event) as unknown as newChatData;

      const trimmedValue = newChatRaw.title.trim();
      const newChat = normalizeValidateForm({ title: trimmedValue });

      this.handleSubmit(newChat.validatedForm as unknown as newChatData).then(() => {
        ChatsController.getChats();
      });

      (event.target as HTMLFormElement).reset();
    },
  };
}
