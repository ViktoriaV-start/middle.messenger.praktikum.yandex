import { URLS } from '@shared/constants';
import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { ApiError, Chat, newChatData, User } from '@shared/types';
import { isEqual } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { ChatsApi, ChatsController } from '../../api';
import templateSource from './sidebar.hbs?raw';
import styles from './sidebar.module.css';

const COMPONENT_NAME = 'Sidebar';

export class Sidebar extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;
  private router = store.getState().router;
  private chats: Chat[] = [];
  private unsubscribe: () => void;

  protected template = templateSource;

  constructor() {
    const data = {
      chats: [],
      urls: URLS,
      profileLink: URLS.profile,
    };

    super({ ...data, componentName: COMPONENT_NAME, styles });
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

  private async getChatUsers(activeChat: Chat) {
    if (activeChat && activeChat.id) {
      const chatUsers = (await ChatsController.getChatUsers(activeChat.id)) as unknown as User[];
      store.setChatUsers(chatUsers);
    }
  }

  protected events = {
    click: async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const chatItem = target.closest<HTMLAnchorElement>('.chat-item');
      const chatId = chatItem && chatItem.dataset.id ? +chatItem.dataset.id : this.chats?.[0];

      if (chatId) {
        const chat = store.getState().chats.find((chat) => chat.id === chatId);
        const isChatSwitched = store.getState().activeChat?.id !== chatId;

        if (chat && isChatSwitched) {
          await this.getChatUsers(chat);

          store.setActiveChat(chat);
          store.clearMessages();
        }
      }
    },
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

  async componentDidMount() {
    this.chats = store.getState().chats;

    this.unsubscribe = store.subscribe(async () => {
      const chats = store.getState().chats;

      if (!isEqual(chats, this.chats)) {
        this.chats = chats;
        const activeChat = store.getState().activeChat;

        if (!activeChat && chats.length) {
          store.setActiveChat(chats[0]);
          await this.getChatUsers(chats[0]);
        }

        if (activeChat) {
          await this.getChatUsers(activeChat);
        }

        this.setProps({ chats: store.getState().chats });
      }
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();

    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
