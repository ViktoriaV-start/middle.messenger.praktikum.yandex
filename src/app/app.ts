import './styles/variables.css';
import './styles/app.css';
import { resolveRoute } from './router';

import './styles/app.css';
import Block from './block';
import { navigate } from '@app/router/router.ts';

export default class App extends Block<{}> {
  x = 'hhhhhhh';

  protected template: string;

  constructor() {
    super();
    this.template = resolveRoute();
    window.addEventListener('popstate', () => this.rerender());
  }

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      // console.log((this.refs.login as HTMLInputElement).value);
    },
    click: (event: Event) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest<HTMLAnchorElement>('.navigation-link');

      if (!linkElement) return;

      event.preventDefault();
      navigate(linkElement.pathname);
      this.rerender();
    },
  };

  private rerender() {
    this.template = resolveRoute();
    this.render();
  }

  // private initRouter() {
  //   document.addEventListener('click', (event) => {
  //     const target = event.target as HTMLElement;
  //     const link = target.closest<HTMLAnchorElement>('.navigation-link');
  //
  //     if (!link) return;
  //
  //     event.preventDefault();
  //     navigate(link.pathname);
  //     this.rerender();
  //   });
  //
  //   window.addEventListener('popstate', this.rerender); // перерендер при back/forward
  // }

  componentDidMount() {
    // setTimeout(() => this.setProps({ buttonName: 'Клик через 3 секунды!' }), 3000);
  }

  protected componentWillUnmount() {
    window.removeEventListener('popstate', () => this.rerender());
  }
}
