import { UserApi } from '@shared/api/user-api';
import { URLS } from '@shared/constants';
import { store } from '@shared/store';
import type { ApiError, Chat, ChatUserData, SendFileResponse, User } from '@shared/types';
import { convertKeysToCamelCase } from '@shared/utils';
import { ChatsApi } from './chats-api';

export class ChatsController {
  static async getChats() {
    try {
      const response = await ChatsApi.request();

      if (Array.isArray(response)) {
        const chatsDto = response.map((chat: Chat) => {
          return convertKeysToCamelCase(chat as unknown as Record<string, unknown>);
        });

        const activeChat = chatsDto[0] as unknown as Chat;
        const chatUsers = (await ChatsController.getChatUsers(activeChat.id)) as unknown as User[];

        store.updateState({
          chats: chatsDto as unknown as Chat[],
          activeChat: activeChat,
          chatUsers: chatUsers,
        });
      }
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }
  }

  static async getUserIdByLogin(user: { login: string }) {
    try {
      const response = await UserApi.searchUser(user);

      return response;
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }
  }

  static getUserNameById(userId: number) {
    const user = store.getState().chatUsers.find((user) => user.id === userId);

    return user?.displayName;
  }

  static async addUserToChat(addUserData: ChatUserData) {
    try {
      const response = await ChatsApi.addUser(addUserData);

      return response;
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }
  }

  static async deleteUserFromChat(deleteUserData: ChatUserData) {
    try {
      const response = await ChatsApi.deleteUser(deleteUserData);

      return response;
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }
  }

  static async getChatUsers(chatId: number) {
    try {
      const response = (await ChatsApi.getUsers({
        id: chatId,
      })) as unknown as User[];

      const chatUsersDto = response.map((user) =>
        convertKeysToCamelCase(user as unknown as Record<string, unknown>)
      );

      return chatUsersDto;
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }

    return null;
  }

  static async sendFile(data: FormData): Promise<SendFileResponse | undefined> {
    try {
      const response = await ChatsApi.uploadFile(data);

      return convertKeysToCamelCase(
        response as unknown as Record<string, unknown>
      ) as unknown as SendFileResponse;
    } catch (error) {
      console.error(error);
    }
  }

  static async getFile(path: string): Promise<Blob | null> {
    try {
      const response = await ChatsApi.getFile(path);

      if (response instanceof Blob) {
        return response;
      }

      console.error('Не Blob:', response);

      return null;
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  static async deleteChat(chatId: number) {
    try {
      await ChatsApi.deleteChat({ chatId: chatId });
    } catch (error) {
      console.error(error);
    }
  }

  static async getMessagesCount(chatId: number) {
    try {
      const response = await ChatsApi.getMessagesCount(chatId);

      return convertKeysToCamelCase(response as unknown as Record<string, number>);
    } catch (error) {
      console.error(error);
    }
  }
}
