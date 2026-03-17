import { URLS } from './urls';

export const CHATS = [
  {
    id: 1,
    title: 'Приветственный чат',
    avatarUrl: 'welcome.jpg',
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
    avatarUrl: 'frontend.jpg',
    unreadCount: 0,
    lastMessage: {
      author: 'Витя',
      text: 'Код ревью в четверг?',
      time: '18:05',
    },
  },
];

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
