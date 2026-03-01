import Handlebars from 'handlebars';
import templateSource from './info.hbs?raw';
import styles from './info.module.css';
import type { InfoProps } from '@shared/types';

const template = Handlebars.compile(templateSource);

export function Info(info: InfoProps) {
  return template({
    styles,
    info,
  });
}
