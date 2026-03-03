import { URLS } from '@shared/constants/urls.ts';

export const chats = [
  {
    id: 1,
    title: 'Приветственный чат',
    avatarUrl: 'welcome.jpg', // **исправлено: avatar → avatarUrl**
    unreadCount: 2,
    lastMessage: {
      author: 'Бот',
      text: '<b>Добро пожаловать!</b>',
      time: '09:20',
    },
  },
  {
    id: 2,
    title: 'Frontend Crew',
    avatarUrl: 'frontend.jpg', // **исправлено: avatar → avatarUrl**
    unreadCount: 0,
    lastMessage: {
      author: 'Витя',
      text: 'Код ревью в четверг?',
      time: '18:05',
    },
  },
];

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

export const REGISTRATION_FORM = {
  mail: {
    type: 'text',
    name: 'mail',
    placeholder: 'Почта',
    label: 'Почта',
  },
  login: {
    type: 'text',
    name: 'login',
    placeholder: 'Логин',
    label: 'Логин',
  },
  name: {
    type: 'text',
    name: 'name',
    placeholder: 'Имя',
    label: 'Имя',
  },
  lastName: {
    type: 'text',
    name: 'lastName',
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
