import Handlebars from 'handlebars';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';
import { Sidebar } from '../sidebar';

const template = Handlebars.compile(templateSource);

export function Chats() {
  const sidebar = Sidebar();

  return template({
    styles,
    sidebar,
  });
}
