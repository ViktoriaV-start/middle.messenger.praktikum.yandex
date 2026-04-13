import { URLS } from '../constants';
import Block from '../lib';
import { store } from '../store';
import type { BlockOwnProps } from '../types';

interface BlockWithContent {
  getContent(): DocumentFragment | Element | null;
  // добавьте другие методы, которые вы используете
}

type BlockConstructorWithContent<BlockProps extends BlockOwnProps = BlockOwnProps> = new (
  ...args: unknown[]
) => Block<BlockProps> & BlockWithContent;

function render(query: string, block: Block<BlockOwnProps> & BlockWithContent) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('Root not found');
  }

  const content = block.getContent();

  if (!content) {
    return root;
  }

  root.innerHTML = '';
  root.appendChild(content);

  return root;
}

class Route {
  _pathname: string;
  _blockClass: BlockConstructorWithContent;
  _block: (Block<BlockOwnProps> & BlockWithContent) | null;
  _props: Record<string, unknown>;

  constructor(pathname: string, view: BlockConstructorWithContent, props: Record<string, unknown>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.unmountComponent();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();

      if (this._block) {
        render(this._props.rootQuery as string, this._block);
      }
    } else {
      render(this._props.rootQuery as string, this._block);
    }

    return;
  }
}

export class Router {
  static __instance: Router;
  routes: Route[];
  history: History;
  _currentRoute: Route | null;
  _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: BlockConstructorWithContent) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname);
    const user = store.getState().user;
    const isLogin = pathname === URLS.login || pathname === URLS.registration;

    if (!user && !isLogin) {
      this.history.replaceState({}, '', URLS.login);
      route = this.getRoute(URLS.login);
    }

    if (user && isLogin) {
      this.history.replaceState({}, '', URLS.chats);
      route = this.getRoute(URLS.chats);
    }

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
