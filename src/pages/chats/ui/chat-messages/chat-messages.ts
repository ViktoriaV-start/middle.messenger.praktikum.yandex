// eslint-disable-next-line import/extensions
import addIcon from '@shared/assets/icons/add-icon.svg?raw';
// eslint-disable-next-line import/extensions
import deleteIcon from '@shared/assets/icons/delete-icon.svg?raw';
// eslint-disable-next-line import/extensions
import dotsIcon from '@shared/assets/icons/dots-icon.svg?raw';
import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { User } from '@shared/types';
import { getFormData } from '@shared/utils/form';
import { ChatsController } from '../../api';
import templateSource from './chat-messages.hbs?raw';
import styles from './chat-messages.module.css';

const COMPONENT_NAME = 'ChatMessages';

export class ChatMessages extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ componentName: COMPONENT_NAME, styles, dotsIcon, addIcon, deleteIcon });
  }

  public setProps() {}

  private async handleAddUser(event: Event) {
    const login = getFormData(event) as { login: string };

    const users = (await ChatsController.getUserIdByLogin(login)) as unknown as User[];

    let user = null;

    if (users.length) {
      user = users.find((user) => user.login === login.login);
    }

    const chats = store.getState().chats;
    const exampleChatId = chats[0].id;

    if (user) {
      const addUserData = {
        users: [user.id],
        chatId: exampleChatId,
      };

      const response = await ChatsController.addUserToChat(addUserData);

      console.log(response);
    }

    document.querySelector('.add-user__form')?.classList.add(styles['hidden']);
  }

  private async handleDeleteUser(event: Event) {
    const login = getFormData(event) as { login: string };

    const users = (await ChatsController.getUserIdByLogin(login)) as unknown as User[];

    let user = null;

    if (users.length) {
      user = users.find((user) => user.login === login.login);
    }

    const chats = store.getState().chats;
    const exampleChatId = chats[0].id;

    if (user) {
      const deleteUserData = {
        users: [user.id],
        chatId: exampleChatId,
      };

      const response = await ChatsController.deleteUserFromChat(deleteUserData);

      console.log(response);
    }

    document.querySelector('.delete-user__form')?.classList.add(styles['hidden']);
  }

  protected events = {
    click: (event: Event) => {
      const target = event.target as HTMLElement;
      const parent = document.querySelector('.chat__header');

      const linkElement = target.closest<HTMLAnchorElement>('.control');
      const isAddControlBtn = linkElement?.classList.contains('add-control__btn');
      const isDeleteControlBtn = linkElement?.classList.contains('delete-control__btn');
      const isUserForm = target.closest<HTMLAnchorElement>('.user-form');

      if (isAddControlBtn) {
        parent?.querySelector('.delete-user__form')?.classList.add(styles['hidden']);

        parent?.querySelector('.add-user__form')?.classList.toggle(styles['hidden']);
      }

      if (isDeleteControlBtn) {
        parent?.querySelector('.add-user__form')?.classList.add(styles['hidden']);

        parent?.querySelector('.delete-user__form')?.classList.toggle(styles['hidden']);
      }

      if (!isUserForm && !isAddControlBtn && !isDeleteControlBtn) {
        parent?.querySelector('.delete-user__form')?.classList.add(styles['hidden']);
        parent?.querySelector('.add-user__form')?.classList.add(styles['hidden']);
      }
    },
    submit: (event: Event) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const isAddUser = target.classList.contains('add-user__form');
      const isDeleteUser = target.classList.contains('delete-user__form');

      if (isAddUser) {
        this.handleAddUser(event).then(() => target.reset());
      }

      if (isDeleteUser) {
        this.handleDeleteUser(event).then(() => target.reset());
      }
    },
  };
}
