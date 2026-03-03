import Handlebars from 'handlebars';
import templateSource from './navigation.hbs?raw';
import styles from './navigation.module.css';

import { URLS } from '@shared/constants';

const template = Handlebars.compile(templateSource);

export function Navigation() {
  return template({
    styles,
    URLS,
  });
}
