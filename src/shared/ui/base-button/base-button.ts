import Handlebars from 'handlebars';
import templateSource from './base-button.hbs?raw';
import baseStyles from './base-button.module.css';

const template = Handlebars.compile(templateSource);

export function BaseButton(title: string, styles: string[] = [], type: string = 'submit') {
  const classNames = [baseStyles['base-button'], ...styles].join(' ');

  return template({
    classNames,
    title,
    type,
  });
}
