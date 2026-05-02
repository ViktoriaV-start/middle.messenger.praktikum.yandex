import { LoginApi, checkUserAuth } from '../../../api';
// импортируем checkUserAuth
import { AuthForm } from '../auth-form';

jest.mock('../../../api', () => ({
  LoginApi: { signin: jest.fn(), signup: jest.fn() },
  checkUserAuth: jest.fn(), // мок для функции checkUserAuth
}));

describe('AuthForm (без DOM)', () => {
  let authForm: AuthForm;

  beforeEach(() => {
    authForm = new AuthForm({
      data: {},
      formControl: { buttonTitle: 'Авторизоваться', linkTitle: 'Нет аккаунта?', link: '/sign-up' },
      componentName: 'AuthFormTest',
      error: false,
    });
    jest.clearAllMocks();
  });

  test('handleSignin возвращает false при некорректных данных', async () => {
    const result = await authForm['handleSignin']({} as Event);
    expect(result).toBe(false);
  });

  test('handleSignin возвращает true при успешном ответе', async () => {
    (LoginApi.signin as jest.Mock).mockResolvedValue('OK');
    (checkUserAuth as jest.Mock).mockResolvedValue(true);

    const result = await authForm['handleSignin']({} as Event);
    expect(result).toBe(true);

    expect(LoginApi.signin).toHaveBeenCalled();
    expect(checkUserAuth).toHaveBeenCalled();
  });
});
