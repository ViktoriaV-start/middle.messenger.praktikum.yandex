import { App } from './app/app';
import { navigate } from './app/router/router.ts';

function render() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App();
}

const init = (renderPage: () => void) => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.navigation-link');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(link.pathname);
      renderPage();
    });
  });

  window.addEventListener('popstate', renderPage);

  renderPage();
};

init(render);
