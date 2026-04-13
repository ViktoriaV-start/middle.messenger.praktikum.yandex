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
    path: '/messenger',
    view: `{{{ Chats }}}`,
  },
  {
    path: '/settings',
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
    path: '/sign-up',
    view: `{{{ Registration }}}`,
  },
  {
    path: '/500',
    view: `{{{ ServerError }}}`,
  },
  {
    path: '404',
    view: `{{{ NotFound }}}`,
  },
  {
    path: '*',
    view: `{{{ NotFound }}}`,
  },
];
