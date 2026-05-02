import { HttpTransport } from '../http-transport';

export const loginApiInstance = new HttpTransport();

export class LoginApi {
  static signin(data: Record<string, unknown>) {
    return loginApiInstance.post('/api/v2/auth/signin', {
      data: { ...data },
    });
  }

  static signup(data: Record<string, unknown>) {
    return loginApiInstance.post('/api/v2/auth/signup', {
      data: { ...data },
    });
  }

  static logout() {
    return loginApiInstance.post('/api/v2/auth/logout');
  }

  static checkAuth() {
    return loginApiInstance.get('/api/v2/auth/user');
  }

  static request() {
    return loginApiInstance.get('/api/v2/chats');
  }
}
