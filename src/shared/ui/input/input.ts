import Handlebars from 'handlebars';
import templateSource from './input.hbs?raw';
import styles from './input.module.css';
import type { InputProps } from '@shared/types';

const template = Handlebars.compile(templateSource);

export function Input(input: InputProps, editable = true) {
  return template({
    styles,
    input,
    editable,
  });
}
