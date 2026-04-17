export type Route = {
  path: string;
  view: string;
};

export const routes: Route[] = [
  {
    path: '/',
    view: `{{{ Login }}}`,
  },
  {
    path: '/chats',
    view: `{{{ Chats }}}`,
  },
  {
    path: '/profile',
    view: `{{{ Profile }}}`,
  },
  {
    path: '/edit-profile',
    view: `{{{EditProfile}}}`,
  },
  {
    path: '/edit-password',
    view: `{{{ EditPassword }}}`,
  },
  {
    path: '/registration',
    view: `{{{ Registration }}}`,
  },
  {
    path: '/server-error',
    view: `{{{ ServerError }}}`,
  },
  {
    path: '*',
    view: `{{{ NotFound }}}`,
  },
];
