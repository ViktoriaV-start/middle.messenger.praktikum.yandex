import { URLS } from './urls';

export const FORM_CONTROL = {
  login: {
    buttonTitle: 'Авторизоваться',
    linkTitle: 'Нет аккаунта?',
    link: URLS.registration,
  },
  registration: {
    buttonTitle: 'Зарегистрироваться',
    linkTitle: 'Войти',
    link: URLS.login,
  },
} as const;

export const MIN_LOGIN_LENGTH = 3;

export const MAX_LOGIN_LENGTH = 20;

export const MIN_PASSWORD_LENGTH = 8;

export const MAX_PASSWORD_LENGTH = 40;

export const MIN_PHONE_LENGTH = 10;

export const MAX_PHONE_LENGTH = 15;

export const MAX_NAME_LENGTH = 50;
