import { Registration } from '@pages/registration';
import { Profile } from '@pages/profile';
import { Chats } from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';

export type Route = {
  path: string;
  view: () => string;
};

export const routes: Route[] = [
  {
    path: '/',
    view: Login,
  },
  {
    path: '/chats',
    view: Chats,
  },
  {
    path: '/profile',
    view: Profile,
  },
  {
    path: '/registration',
    view: Registration,
  },
  {
    path: '/server-error',
    view: ServerError,
  },
  {
    path: '*',
    view: NotFound,
  },
];
