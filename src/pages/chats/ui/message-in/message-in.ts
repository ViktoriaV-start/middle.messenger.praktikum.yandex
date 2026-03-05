import Handlebars from 'handlebars';
import templateSource from './message-in.hbs?raw';
import styles from './message-in.module.css';

const template = Handlebars.compile(templateSource);

export function MessageIn() {
  return template({
    styles,
  });
}
