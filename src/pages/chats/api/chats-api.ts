import { HttpTransport } from '@shared/api';
import type { ChatUserData, ChatUsersData, newChatData } from '@shared/types';

export const chatsApiInstance = new HttpTransport();

export class ChatsApi {
  static create(data: newChatData) {
    return chatsApiInstance.post('/api/v2/chats', {
      data: { ...data },
    });
  }

  static addUser(data: ChatUserData) {
    return chatsApiInstance.put('/api/v2/chats/users', {
      data: { ...data },
    });
  }

  static deleteUser(data: ChatUserData) {
    return chatsApiInstance.delete('/api/v2/chats/users', {
      data: { ...data },
    });
  }

  static request() {
    return chatsApiInstance.get('/api/v2/chats');
  }

  static getUsers(data: ChatUsersData) {
    return chatsApiInstance.get(`/api/v2/chats/${data.id}/users`, {
      data: { ...data },
    });
  }
}
