import { Router } from '../router/router';
import type { Chat } from '../types';
import type { Indexed } from './global-types';

export type Listener = () => void;

export interface StoreState extends Indexed {
  router: Router;
  // user?: User;
  chats: Chat[];
  // другие поля
}
