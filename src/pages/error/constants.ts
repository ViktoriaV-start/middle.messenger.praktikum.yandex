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
