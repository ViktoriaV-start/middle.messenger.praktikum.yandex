import { HttpTransport } from '../http-transport';

export const userApiInstance = new HttpTransport();

export class UserApi {
  static async searchUser(userLogin: { login: string }) {
    return userApiInstance.post('/api/v2/user/search', {
      data: { ...userLogin },
    });
  }
}
