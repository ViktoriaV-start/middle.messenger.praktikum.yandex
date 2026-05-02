import { store } from '../../store';
import { StoreState } from '../../types';
import { Router } from '../router';

jest.mock('../../store', () => ({
  store: {
    getState: jest.fn(),
  },
}));

class MockBlock {
  getContent() {
    const div = document.createElement('div');

    return div;
  }
}

const mockedStore = store as jest.Mocked<typeof store>;

describe('Проверяем переходы у Роута', () => {
  it('Переход на новую страницу должен менять состояние сущности history', () => {
    window.history.pushState({ page: 'login' }, 'Login', '/login');
    window.history.pushState({ page: 'register' }, 'Register', '/register');

    expect(window.history.length).toBe(3);
  });
});

describe('Проверяет поведение при неавтризованном пользователе', () => {
  it('При неавторизованном пользователе роутер переводит на страницу логина', () => {
    mockedStore.getState.mockReturnValue({
      user: null,
      router: {},
      chats: [],
      activeChat: null,
      chatUsers: [],
      messages: [],
    } as unknown as StoreState);

    const router = new Router('#app');

    router
      .use('/login', MockBlock as never)
      .use('/chats', MockBlock as never)
      .start();

    router.go('/chats');

    expect(window.location.pathname).toBe('/');
  });
});
