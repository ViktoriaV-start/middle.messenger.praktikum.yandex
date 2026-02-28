import Handlebars from 'handlebars';
import templateSource from './registration.hbs?raw';
import styles from './registration.module.css';

const template = Handlebars.compile(templateSource);

export function Registration() {
  return template({
    styles,
  });
}
