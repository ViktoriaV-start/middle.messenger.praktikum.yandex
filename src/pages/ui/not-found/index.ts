import Handlebars from 'handlebars';
import templateSource from './not-found.hbs?raw';
import styles from './not-found.module.css';
import { URLS } from '@shared/constants';

const template = Handlebars.compile(templateSource);

export function NotFound() {
  return template({
    styles,
    URLS,
  });
}
