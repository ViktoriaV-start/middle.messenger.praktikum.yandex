import { Registration } from '@pages/ui/registration';
import { Profile } from '@pages/ui/profile';
import { Chats } from '@pages/ui/chats';
import { NotFound } from '@pages/ui/not-found';
import { ServerError } from '@pages/ui/serever-error';

export type Route = {
  path: string;
  view: () => string;
};

export const routes: Route[] = [
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
    path: '/error',
    view: ServerError,
  },
  {
    path: '*',
    view: NotFound,
  },
];
