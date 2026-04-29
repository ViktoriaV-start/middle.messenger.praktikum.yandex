// eslint-disable-next-line import/extensions
import deleteIcon from '@shared/assets/icons/delete-icon.svg?raw';
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
      userId: store.getState().user?.id,
    };

    super({ ...data, componentName: COMPONENT_NAME, styles, deleteIcon });
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

      return chatUsers;
    }
  }

  private async deleteChat(chatId: string) {
    await ChatsController.deleteChat(+chatId);
  }

  protected events = {
    click: async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const chatItem = target.closest<HTMLAnchorElement>('.chat-item');

      const chatId = chatItem && chatItem.dataset.id ? +chatItem.dataset.id : this.chats?.[0];

      const deleteBtn = target.closest<HTMLAnchorElement>('.delete-chat');

      if (deleteBtn) {
        const chatId = deleteBtn.dataset.id;

        if (chatId) {
          await this.deleteChat(chatId);
          await ChatsController.getChats();
        }
      }

      if (chatId) {
        const chat = store.getState().chats.find((chat) => chat.id === chatId);
        const isChatSwitched = store.getState().activeChat?.id !== chatId;

        if (chat && isChatSwitched) {
          if (chat.unreadCount) {
            const copiedChats = structuredClone(store.getState().chats);
            const copiedChat = copiedChats.find((chat) => chat.id === chatId);

            if (copiedChat) {
              copiedChat.unreadCount = 0;
            }

            this.setProps({ chats: [...copiedChats] });
          }

          const chatUsers = await this.getChatUsers(chat);

          store.updateState({
            chats: store.getState().chats,
            activeChat: chat,
            chatUsers: chatUsers ? chatUsers : [],
            messages: [],
          });
        }
      }
    },
    submit: (event: Event) => {
      event.preventDefault();

      const newChatRaw = getFormData(event) as unknown as newChatData;

      const trimmedValue = newChatRaw.title.trim();
      const newChat = normalizeValidateForm({ title: trimmedValue });
      const isNotEmptyChatTitle = newChat.validatedForm.title.length && !newChat.error;

      if (isNotEmptyChatTitle) {
        this.handleSubmit(newChat.validatedForm as unknown as newChatData).then(() => {
          ChatsController.getChats();
        });

        (event.target as HTMLFormElement).reset();
      }
    },
  };

  async componentDidMount() {
    this.chats = store.getState().chats;

    this.setProps({ chats: this.chats });

    this.unsubscribe = store.subscribe(async () => {
      const chats = store.getState().chats;

      if (!isEqual(chats, this.chats)) {
        this.chats = chats;
        const activeChat = store.getState().activeChat;

        if (!activeChat && chats.length) {
          const chatUsers = await this.getChatUsers(chats[0]);

          store.updateState({
            activeChat: chats[0],
            chatUsers: chatUsers ? chatUsers : [],
            messages: [],
          });
        }

        if (activeChat) {
          const chatUsers = await this.getChatUsers(activeChat);

          if (chatUsers) {
            store.setChatUsers(chatUsers);
          }
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
