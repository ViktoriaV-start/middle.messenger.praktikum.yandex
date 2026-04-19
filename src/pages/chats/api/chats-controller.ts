import { UserApi } from '@shared/api/user-api';
import { URLS } from '@shared/constants';
import { store } from '@shared/store';
import type { ApiError, Chat, ChatUserData, User } from '@shared/types';
import { convertKeysToCamelCase } from '@shared/utils';
import { ChatsApi } from './chats-api';

export class ChatsController {
  static getChats() {
    ChatsApi.request().then((data) => {
      if (Array.isArray(data)) {
        const chatsDto = data.map((chat: Chat) => {
          return convertKeysToCamelCase(chat as unknown as Record<string, unknown>);
        });

        store.setChats(chatsDto as unknown as Chat[]);
      }
    });
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

  static async getChatUsers(chatId: number): Promise<User[] | null> {
    try {
      const response = (await ChatsApi.getUsers({
        id: chatId,
      })) as unknown as User[];

      return response;
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }

    return null;
  }
}
