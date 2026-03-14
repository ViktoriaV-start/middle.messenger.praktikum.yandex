import { routes } from './routes';

export function resolveRoute(): string | '' {
  const pathname = location.pathname;

  const match = routes.find((route) => route.path === pathname);

  if (match) {
    return match.view;
  }

  const notFoundRoute = routes.find((route) => route.path === '*');

  return notFoundRoute ? notFoundRoute.view : '';
}

export function navigate(path: string): void {
  history.pushState({}, '', path);
}
