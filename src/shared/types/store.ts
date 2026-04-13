import { Router } from '../router/router';
import type { Indexed } from './global-types';

export type Listener = () => void;

export interface State extends Indexed {
  router: Router;
  // user?: User;
  // chats?: Chat[];
  // другие поля
}
