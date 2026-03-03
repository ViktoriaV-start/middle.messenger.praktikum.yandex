import Handlebars from 'handlebars';
import templateSource from './base-button.hbs?raw';
import styles from './base-button.module.css';

const template = Handlebars.compile(templateSource);

export function BaseButton(title: string) {
  return template({
    styles,
    title,
  });
}
