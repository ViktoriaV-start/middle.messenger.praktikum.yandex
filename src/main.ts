import App from './app/app';

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
