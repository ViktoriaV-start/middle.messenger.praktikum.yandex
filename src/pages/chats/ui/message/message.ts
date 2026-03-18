// eslint-disable-next-line import/extensions
import clipIcon from '@shared/assets/icons/clip-icon.svg?raw';
// eslint-disable-next-line import/extensions
import sendMessageIcon from '@shared/assets/icons/right-arrow-icon.svg?raw';
import Block from '@shared/lib/block';
import templateSource from './message.hbs?raw';
import styles from './message.module.css';

export class Message extends Block<Record<string, unknown>> {
  static componentName = 'Message';

  protected template = templateSource;

  constructor() {
    super({ sendMessageIcon, clipIcon, styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
