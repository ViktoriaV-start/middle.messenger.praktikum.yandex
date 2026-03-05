import Handlebars from 'handlebars';
import templateSource from './message-out.hbs?raw';
import styles from './message-out.module.css';

const template = Handlebars.compile(templateSource);

export function MessageOut() {
  return template({
    styles,
  });
}
