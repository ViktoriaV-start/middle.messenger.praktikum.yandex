import Handlebars from 'handlebars';
import templateSource from './message.hbs?raw';
import styles from './message.module.css';
import clipIcon from '@app/assets/icons/clip-icon.svg?raw';
import sendMessageIcon from '@app/assets/icons/right-arrow-icon.svg?raw';

const template = Handlebars.compile(templateSource);

export function Message() {
  return template({
    styles,
    sendMessageIcon,
    clipIcon,
  });
}
