import Handlebars from 'handlebars';
import templateSource from './profile.hbs?raw';
import styles from './profile.module.css';

const template = Handlebars.compile(templateSource);

export function Profile() {
  return template({
    styles,
  });
}
