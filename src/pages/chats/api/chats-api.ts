import { HttpTransport } from '@shared/api';

export const chatsApiInstance = new HttpTransport();

export class ChatsApi {
  static create() {
    return chatsApiInstance.post('/api/v2/auth/signin', {
      data: {
        login: 'someLi',
        password: 'veryStrongPASS',
      },
    });
  }

  static request() {
    return chatsApiInstance.get('/api/v2/chats');
  }
}
