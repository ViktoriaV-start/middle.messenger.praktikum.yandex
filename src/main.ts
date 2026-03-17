import { registerComponent } from '@app/register-component.ts';
import { Chats, Message, MessageIn, MessageOut, Sidebar } from '@pages/chats';
import { ChatMessages } from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { Profile } from '@pages/profile';
import { EditPassword } from '@pages/profile';
import { EditProfile } from '@pages/profile';
import { Registration } from '@pages/registration';
import { AuthForm, BaseButton, Info, InputAuth, Input, ChatItem, Navigation } from '@shared/ui';
import { BackButton } from '@shared/ui/back-button';
import { BaseLink } from '@shared/ui/base-link';
import App from './app/app';

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

const root = document.querySelector<HTMLDivElement>('#app');

let app: App;

function render() {
  if (!root) {
    return console.error('Root element is null');
  }

  // Создаём App один раз
  if (!app) {
    app = new App();
    const element = app.element();

    if (element) {
      root.appendChild(element);
    }
  }
}

function initInputAuth() {
  document.addEventListener('focusin', (e) => {
    const target = e.target as HTMLInputElement;

    if (target.classList.contains('input-auth')) {
      const label = target.parentElement?.querySelector('.label-auth');
      label?.classList.remove('visually-hidden');
    }
  });

  document.addEventListener('focusout', (e) => {
    const target = e.target as HTMLInputElement;

    if (target.classList.contains('input-auth')) {
      const label = target.parentElement?.querySelector('.label-auth');

      if (target.value.trim() === '') {
        label?.classList.add('visually-hidden');
      }
    }
  });
}

function init() {
  initInputAuth();
  render();
}

init();
console.log('Загрузка');
