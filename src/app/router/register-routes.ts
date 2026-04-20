import { Chats } from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { EditPassword, EditProfile, Profile } from '@pages/profile';
import { Registration } from '@pages/registration';
import type { Router } from '@shared/router/router';

export const registerRoutes = (router: Router): Router => {
  return router
    .use('/', Login)
    .use('/messenger', Chats)
    .use('/settings', Profile)
    .use('/edit-profile', EditProfile)
    .use('/edit-password', EditPassword)
    .use('/sign-up', Registration)
    .use('/500', ServerError)
    .use('/404', NotFound);
};
