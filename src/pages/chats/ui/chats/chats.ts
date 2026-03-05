import Handlebars from 'handlebars';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';
import { Sidebar } from '../sidebar';
import { ChatMessages } from '@pages/chats/ui/chat-messages';

const template = Handlebars.compile(templateSource);

export function Chats() {
  const sidebar = Sidebar();
  const chatMessages = ChatMessages();

  return template({
    styles,
    sidebar,
    chatMessages,
  });
}
