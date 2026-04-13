import { Chats, Message, MessageIn, MessageOut, Sidebar, ChatMessages } from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { Profile, EditPassword, EditProfile } from '@pages/profile';
import { Registration } from '@pages/registration';
import { LoginApi } from '@shared/api';
import { store } from '@shared/store';
import { AuthForm, BaseButton, Info, InputAuth, Input, ChatItem, Navigation } from '@shared/ui';
import { BackButton } from '@shared/ui/back-button';
import { BaseLink } from '@shared/ui/base-link';
import { convertKeysToCamelCase } from '@shared/utils';
import { registerComponent } from './register-component';
import { registerRoutes } from './router';

async function checkUserAuth() {
  try {
    const response = await LoginApi.checkAuth();

    if (response) {
      const responseDto = convertKeysToCamelCase({ ...response });
      store.setState('user', responseDto);
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
