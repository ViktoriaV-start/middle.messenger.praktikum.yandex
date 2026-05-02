import {
  Chats,
  Message,
  MessageIn,
  MessageOut,
  Sidebar,
  ChatMessages,
  ChatItem,
} from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { Profile, EditPassword, EditProfile } from '@pages/profile';
import { Registration } from '@pages/registration';
import { checkUserAuth } from '@shared/api';
import { store } from '@shared/store';
import { AuthForm, BaseButton, Info, InputAuth, Input } from '@shared/ui';
import { BackButton } from '@shared/ui/back-button';
import { BaseInput } from '@shared/ui/base-input';
import { BaseLink } from '@shared/ui/base-link';
import { Confirmation } from '@shared/ui/confirmation';
import { registerComponent } from './register-component';
import { registerRoutes } from './router';

export const initializeApp = async () => {
  const router = store.getState().router;
  await checkUserAuth();

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
