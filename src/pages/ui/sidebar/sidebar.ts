import Handlebars from 'handlebars';
import templateSource from './sidebar.hbs?raw';
import styles from './sidebar.module.css';

import { ChatItem } from '@shared/ui/chat-item';
import { URLS, chats } from '@shared/constants';

const template = Handlebars.compile(templateSource);

export function Sidebar() {
  const renderedChats = chats.map((chat) => ChatItem(chat)).join('');

  return template({
    styles,
    URLS,
    chats: renderedChats,
  });
}
