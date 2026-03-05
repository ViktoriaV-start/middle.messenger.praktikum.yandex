import Handlebars from 'handlebars';
import templateSource from './message.hbs?raw';
import styles from './message.module.css';
import clipIcon from '@app/assets/icons/clip-icons.svg';
import sendMessageIcon from '@app/assets/icons/right-arrow-icon.svg';

const template = Handlebars.compile(templateSource);

export function Message() {
  return template({
    styles,
    clipIcon,
    sendMessageIcon,
  });
}
