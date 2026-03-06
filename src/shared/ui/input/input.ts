import Handlebars from 'handlebars';
import templateSource from './input.hbs?raw';
import styles from './input.module.css';
import type { InputProps } from '@shared/types';

const template = Handlebars.compile(templateSource);

export function Input(input: InputProps, isEditable: boolean = false) {
  const readonly = isEditable ? '' : 'readonly';
  const editableClass = isEditable ? styles.input__editable : '';

  return template({
    styles,
    input,
    readonly,
    editableClass,
  });
}
