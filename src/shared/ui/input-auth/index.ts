import Handlebars from 'handlebars';
import templateSource from './input-auth.hbs?raw';
import styles from './input-auth.module.css';
import type { InputAuthProps } from '@shared/types';

const template = Handlebars.compile(templateSource);

export function InputAuth(input: InputAuthProps) {
  const html = template({
    styles,
    input,
  });

  return html;
}
