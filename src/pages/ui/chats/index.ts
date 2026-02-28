import Handlebars from 'handlebars';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';
import { Sidebar } from '@pages/ui/sidebar';

const template = Handlebars.compile(templateSource);

export function Chats() {
  return template({
    styles,
    sidebar: Sidebar(),
  });
}
