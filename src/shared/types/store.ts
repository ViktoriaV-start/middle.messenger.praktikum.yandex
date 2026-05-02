import { Router } from '../router/router';
import type { Chat, User } from '../types';
import type { Indexed } from './global-types';

export type Listener = () => void;

export interface StoreState extends Indexed {
  router: Router;
  user: User | null;
  chats: Chat[];
  activeChat: Chat | null;
  chatUsers: User[];
  messages: Record<string, StoreMessage[]>;
}

export interface StoreMessage {
  chatId: number;
  time: string;
  type: string;
  userId: string;
  content: string;
  file?: {
    id: number;
    userId: number;
    path: string;
    filename: string;
    contentType: string;
    contentSize: number;
    uploadDate: string;
  };
}
