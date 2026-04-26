// eslint-disable-next-line import/extensions
import addIcon from '@shared/assets/icons/add-icon.svg?raw';
// eslint-disable-next-line import/extensions
import deleteIcon from '@shared/assets/icons/delete-icon.svg?raw';
// eslint-disable-next-line import/extensions
import dotsIcon from '@shared/assets/icons/dots-icon.svg?raw';
import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { Chat, User } from '@shared/types';
import { getFormData } from '@shared/utils/form';
import { ChatsController } from '../../api';
import { socketController } from '../../api/socket-controller';
import { CONFIRMATION_FORM_CONFIG } from '../../constants';
import type { ConfirmationFormConfigItem } from '../../types';
import { addClassname, toggleClassname } from '../../utils';
import templateSource from './chat-messages.hbs?raw';
import styles from './chat-messages.module.css';

const COMPONENT_NAME = 'ChatMessages';

export class ChatMessages extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private userToAdd: User | null = null;
  protected unsubscribe: () => void;

  constructor() {
    const activeChat = store.getState().activeChat;
    const messages = store.getState().messages;
    const userId = store.getState().user?.id;

    super({
      activeChat,
      chatUsers: [],
      messages,
      userId,
      componentName: COMPONENT_NAME,
      confirmation: { text: '', hidden: true, name: null },
      styles,
      dotsIcon,
      addIcon,
      deleteIcon,
    });

    this.init();

    this.unsubscribe = store.subscribe(async () => {
      await this.init();

      this.setProps({
        messages: store.getState().messages,
        chatUsers: store.getState().chatUsers,
        activeChat: store.getState().activeChat,
      });
    });
  }

  private getActiveChat(): Chat {
    let activeChat = store.getState().activeChat as Chat;

    if (!activeChat) {
      activeChat = store.getState().chats[0];
    }

    return activeChat;
  }

  private async getChatUsers() {
    const activeChat = this.getActiveChat();

    if (activeChat && activeChat.id) {
      const chatUsers = (await ChatsController.getChatUsers(activeChat.id)) as unknown as User[];
      store.setChatUsers(chatUsers);

      this.setProps({
        activeChat,
        chatUsers,
        confirmation: {
          text: '',
          hidden: true,
          type: null,
        },
      });
    }
  }

  private async setConnection() {
    const user = store.getState().user;
    const activeChat = store.getState().activeChat as Chat;

    if (user && activeChat) {
      await socketController.setSocketConnection({
        userId: user.id,
        chatId: activeChat.id,
      });
    }
  }

  public setProps(props: Record<string, unknown>) {
    super.setProps({ ...props });
  }

  private async handleSearchUser(event: Event, confirmationFormConfig: ConfirmationFormConfigItem) {
    const login = getFormData(event) as { login: string };

    const users = (await ChatsController.getUserIdByLogin(login)) as unknown as User[];

    let user = null;

    if (users.length) {
      user = users.find((user) => user.login === login.login);
    }

    if (user) {
      this.userToAdd = user;
      this.setProps({
        confirmation: {
          text: `${confirmationFormConfig.text} ${user.login}`,
          hidden: false,
          type: confirmationFormConfig.formType,
        },
      });
    }

    addClassname({ selector: '.add-user__form', classname: styles['hidden'] });
    addClassname({ selector: '.delete-user__form', classname: styles['hidden'] });
    addClassname({ selector: '.chat__menu', classname: styles['hidden'] });
  }

  private async handleAddUser() {
    const chats = store.getState().chats;
    const exampleChatId = chats[0].id;
    console.log(exampleChatId);

    if (this.userToAdd) {
      const addUserData = {
        users: [this.userToAdd.id],
        chatId: exampleChatId,
      };

      await ChatsController.addUserToChat(addUserData);
    }
  }

  private async handleDeleteUser() {
    const chats = store.getState().chats;
    const exampleChatId = chats[0].id;

    if (this.userToAdd) {
      const deleteUserData = {
        users: [this.userToAdd.id],
        chatId: exampleChatId,
      };

      const response = await ChatsController.deleteUserFromChat(deleteUserData);

      console.log(response);
    }
  }

  protected events = {
    click: (event: Event) => {
      const target = event.target as HTMLElement;
      const parent = document.querySelector('.chat__header');
      const controlElement = target.closest<HTMLAnchorElement>('.control');
      const isAddControlBtn = controlElement?.classList.contains('add-control__btn');
      const isDeleteControlBtn = controlElement?.classList.contains('delete-control__btn');
      const isUserForm = target.closest<HTMLAnchorElement>('.user-form');
      const isUserControlBtn = controlElement?.classList.contains('chat__control-btn');

      const confirmationForm = document.querySelector('.confirmation-form');
      const isConfirmationForm = !confirmationForm?.classList.contains('hidden');

      const isChatMenuOpened = !parent
        ?.querySelector('.chat__menu')
        ?.classList.contains(styles['hidden']);

      if (isChatMenuOpened && !isUserForm && !isAddControlBtn && !isDeleteControlBtn) {
        addClassname({ selector: '.chat__menu', classname: styles['hidden'], parent });
      }

      if (isUserControlBtn) {
        toggleClassname({ selector: '.chat__menu', classname: styles['hidden'], parent });
      }

      if (isAddControlBtn) {
        addClassname({ selector: '.delete-user__form', classname: styles['hidden'], parent });
        toggleClassname({ selector: '.add-user__form', classname: styles['hidden'], parent });
      }

      if (isDeleteControlBtn) {
        addClassname({ selector: '.add-user__form', classname: styles['hidden'], parent });
        toggleClassname({ selector: '.delete-user__form', classname: styles['hidden'], parent });
      }

      if (!isUserForm && !isAddControlBtn && !isDeleteControlBtn) {
        if (isChatMenuOpened) {
          addClassname({ selector: '.delete-user__form', classname: styles['hidden'], parent });
          addClassname({ selector: '.add-user__form', classname: styles['hidden'], parent });
        }

        if (isConfirmationForm) {
          confirmationForm?.classList.add(styles['hidden']);
        }
      }
    },
    submit: async (event: Event) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const formType = target.dataset.formType;

      const isAddUserSearch = formType === CONFIRMATION_FORM_CONFIG.adding.searchFormType;
      const isDeleteUserSearch = formType === CONFIRMATION_FORM_CONFIG.deleting.searchFormType;
      const isAddUser = formType === CONFIRMATION_FORM_CONFIG.adding.formType;
      const isDeleteUser = formType === CONFIRMATION_FORM_CONFIG.deleting.formType;

      if (isAddUserSearch) {
        this.handleSearchUser(event, CONFIRMATION_FORM_CONFIG.adding).then(() => target.reset());
      }

      if (isDeleteUserSearch) {
        this.handleSearchUser(event, CONFIRMATION_FORM_CONFIG.deleting).then(() => target.reset());
      }

      if (isAddUser) {
        this.handleAddUser().then(() => {
          this.getChatUsers();
        });
      }

      if (isDeleteUser) {
        this.handleDeleteUser().then(() => {
          this.getChatUsers();
        });
      }
    },
  };

  private async init() {
    await this.setConnection();
  }
}
