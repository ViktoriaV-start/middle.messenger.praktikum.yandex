import Handlebars from 'handlebars';
import templateSource from './chat-item.hbs?raw';
import styles from './chat-item.module.css';

export interface ChatItemProps {
  id: number;
  avatarUrl: string;
  title: string;
  unreadCount?: number;
  lastMessage?: {
    text: string;
    time: string;
  };
}

const template = Handlebars.compile(templateSource);

export function ChatItem(props: ChatItemProps) {
  return template({
    ...props,
    styles,
  });
}
