import { App } from './app/app';
import { navigate } from './app/router/router.ts';

function render() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App();
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

function initRouter() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const link = target.closest<HTMLAnchorElement>('.navigation-link');

    if (!link) return;

    event.preventDefault();
    navigate(link.pathname);
    render();
  });

  window.addEventListener('popstate', render);
}

function init() {
  initRouter();
  initInputAuth();
  render();
}

init();
console.log('Загрузка');
