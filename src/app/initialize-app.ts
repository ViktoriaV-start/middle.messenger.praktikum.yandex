import { Chats, Message, MessageIn, MessageOut, Sidebar, ChatMessages } from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { Profile, EditPassword, EditProfile } from '@pages/profile';
import { Registration } from '@pages/registration';
import { LoginApi } from '@shared/api';
import { BASE_API_URL } from '@shared/constants';
import { store } from '@shared/store';
import type { User } from '@shared/types';
import { AuthForm, BaseButton, Info, InputAuth, Input, ChatItem, Navigation } from '@shared/ui';
import { BackButton } from '@shared/ui/back-button';
import { BaseInput } from '@shared/ui/base-input';
import { BaseLink } from '@shared/ui/base-link';
import { Confirmation } from '@shared/ui/confirmation';
import { convertKeysToCamelCase } from '@shared/utils';
import { registerComponent } from './register-component';
import { registerRoutes } from './router';

async function checkUserAuth() {
  try {
    const response = await LoginApi.checkAuth();

    if (response) {
      const responseDto = convertKeysToCamelCase({ ...response }) as unknown as User;
      const avatarUrl = `${BASE_API_URL}/api/v2/resources${responseDto.avatar}`;

      store.setState('user', { ...responseDto, avatar: avatarUrl });
    }
  } catch (error) {
    console.log(error);
  }
}

export const initializeApp = async () => {
  const router = store.getState().router;
  await checkUserAuth();

  registerComponent(Navigation);
  registerComponent(InputAuth);
  registerComponent(Input);
  registerComponent(BaseButton);
  registerComponent(BaseLink);
  registerComponent(AuthForm);
  registerComponent(Info);
  registerComponent(ChatItem);
  registerComponent(BackButton);

  registerComponent(NotFound);
  registerComponent(ServerError);
  registerComponent(Login);
  registerComponent(Registration);
  registerComponent(Login);
  registerComponent(Profile);
  registerComponent(EditPassword);
  registerComponent(EditProfile);
  registerComponent(Message);
  registerComponent(MessageIn);
  registerComponent(MessageOut);
  registerComponent(ChatMessages);
  registerComponent(Sidebar);
  registerComponent(Chats);
  registerComponent(BaseInput);
  registerComponent(Confirmation);

  registerRoutes(router).start();

  document.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    const linkElement = target.closest<HTMLAnchorElement>('.navigation-link');

    if (!linkElement) {
      return;
    }

    event.preventDefault();
    router.go(linkElement.pathname);
  });
};
