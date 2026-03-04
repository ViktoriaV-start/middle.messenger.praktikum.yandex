import { URLS } from '@shared/constants';

export const NOT_FOUND_INFO = {
  title: '404',
  text: 'Не туда попали',
  link: URLS.chats,
  linkTitle: 'Назад к чатам',
} as const;

export const SERVER_ERROR_INFO = {
  title: '500',
  text: 'Мы уже фиксим',
  link: URLS.chats,
  linkTitle: 'Назад к чатам',
} as const;

export const REGISTRATION_FORM = {
  email: {
    type: 'text',
    name: 'email',
    placeholder: 'Почта',
    label: 'Почта',
  },
  login: {
    type: 'text',
    name: 'login',
    placeholder: 'Логин',
    label: 'Логин',
  },
  firstName: {
    type: 'text',
    name: 'firstName',
    placeholder: 'Имя',
    label: 'Имя',
  },
  secondName: {
    type: 'text',
    name: 'secondName',
    placeholder: 'Фамилия',
    label: 'Фамилия',
  },
  phone: {
    type: 'text',
    name: 'phone',
    placeholder: 'Телефон',
    label: 'Телефон',
  },
  password: {
    type: 'text',
    name: 'password',
    placeholder: 'Пароль',
    label: 'Пароль',
  },
  repeatPassword: {
    type: 'text',
    name: 'password',
    placeholder: 'Пароль (еще раз)',
    label: 'Пароль (еще раз)',
  },
} as const;

export const LOGIN_FORM = {
  login: {
    type: 'text',
    name: 'login',
    placeholder: 'Логин',
    label: 'Логин',
  },
  password: {
    type: 'text',
    name: 'password',
    placeholder: 'Пароль',
    label: 'Пароль',
  },
} as const;

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
};

export const PROFILE_INPUTS = {
  email: {
    type: 'email',
    name: 'email',
    placeholder: 'Почта',
    label: 'Почта',
  },
  login: {
    type: 'text',
    name: 'login',
    placeholder: 'Логин',
    label: 'Логин',
  },
  firstName: {
    type: 'text',
    name: 'firstName',
    placeholder: 'Имя',
    label: 'Имя',
  },
  secondName: {
    type: 'text',
    name: 'secondName',
    placeholder: 'Фамилия',
    label: 'Фамилия',
  },
  displayName: {
    type: 'text',
    name: 'displayName',
    placeholder: 'Имя в чате',
    label: 'Имя в чате',
  },
  phone: {
    type: 'text',
    name: 'phone',
    placeholder: 'Телефон',
    label: 'Телефон',
  },
} as const;

export const USER = {
  email: 'li-mail@yandex.ru',
  login: 'lli-yue',
  firstName: 'Юэ',
  secondName: 'Ли',
  displayName: 'Ли Юэ ',
  phone: '89551234567',
};

export const PROFILE_BUTTONS = {
  changeData: 'Изменить данные',
  changePassword: 'Изменить пароль',
} as const;
