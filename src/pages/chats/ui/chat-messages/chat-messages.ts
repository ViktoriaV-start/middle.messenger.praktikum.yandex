import Handlebars from 'handlebars';
import templateSource from './chat-messages.hbs?raw';
import styles from './chat-messages.module.css';
import { MessageIn } from '@pages/chats/ui/message-in';
import { MessageOut } from '@pages/chats/ui/message-out';
import { Message } from '@pages/chats/ui/message';

const template = Handlebars.compile(templateSource);

export function ChatMessages() {
  const messageIn = MessageIn();
  const messageOut = MessageOut();
  const messageInput = Message();

  return template({
    styles,
    messageIn,
    messageOut,
    messageInput,
  });
}
