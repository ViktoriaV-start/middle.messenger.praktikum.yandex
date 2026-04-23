import { UserApi } from '@shared/api/user-api';
import { URLS } from '@shared/constants';
import { store } from '@shared/store';
import type { ApiError, Chat, ChatUserData, User } from '@shared/types';
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

        store.setChats(chatsDto as unknown as Chat[]);
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
}
