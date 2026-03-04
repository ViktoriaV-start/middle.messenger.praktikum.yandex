import Handlebars from 'handlebars';
import templateSource from './base-button.hbs?raw';
import baseStyles from './base-button.module.css';

const template = Handlebars.compile(templateSource);

export function BaseButton(title: string, styles = [baseStyles['base-button']]) {
  const classNames = styles.join(' ');

  return template({
    classNames,
    title,
  });
}
