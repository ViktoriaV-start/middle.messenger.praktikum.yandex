import type { BlockOwnProps, StoreMessage } from '@shared/types';

export interface Message {
  author: string;
  text: string;
  time: string;
}

export interface ChatItem {
  id: number;
  title: string;
  avatarUrl: string;
  unreadCount: number;
  lastMessage: Message;
}

export interface HandleClassnameProps {
  selector: string;
  classname: string;
  parent?: Document | Element | null;
}

export interface ConfirmationComponentProps {
  confirmation: {
    text: string;
    hidden: boolean;
  };
}

export interface ConfirmationFormConfigItem {
  text: string;
  searchFormType: string;
  formType: string;
}

export interface GetChatTokenResponse {
  token: string;
}

export interface SetSocketConnectionProps {
  userId: number;
  chatId: number;
}

export interface MessageProps extends BlockOwnProps {
  message: StoreMessage;
  componentName: string;
  styles?: Record<string, string>;
}
