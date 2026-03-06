import Handlebars from 'handlebars';
import templateSource from './base-link.hbs?raw';
import styles from './base-link.module.css';

const template = Handlebars.compile(templateSource);

export function BaseLink(title: string, href: string) {
  return template({
    styles,
    title,
    href,
  });
}
