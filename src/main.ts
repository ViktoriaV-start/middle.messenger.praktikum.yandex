import App from './app/app';
import { registerComponent } from '@app/register-component.ts';
import { AuthForm, BaseButton, Info, InputAuth } from '@shared/ui';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { BaseLink } from '@shared/ui/base-link';
import { Registration } from '@pages/registration';

registerComponent(InputAuth);
registerComponent(BaseButton);
registerComponent(BaseLink);
registerComponent(AuthForm);

registerComponent(Info);
registerComponent(NotFound);
registerComponent(ServerError);
registerComponent(Registration);
registerComponent(Login);

const root = document.querySelector<HTMLDivElement>('#app');

let app: App;

function render() {
  if (!root) return console.error('Root element is null');

  // Создаём App один раз
  if (!app) {
    app = new App();
    const element = app.element();

    if (element) {
      root.appendChild(element);
    }
  }
}

// function initRouter() {
//   document.addEventListener('click', (event) => {
//     const target = event.target as HTMLElement;
//     const link = target.closest<HTMLAnchorElement>('.navigation-link');
//
//     if (!link) return;
//
//     event.preventDefault();
//     navigate(link.pathname);
//     render();
//   });
//
//   window.addEventListener('popstate', render); // перерендер при back/forward
// }

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
