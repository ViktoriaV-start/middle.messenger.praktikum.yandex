import templateSource from './message.hbs?raw';
import styles from './message.module.css';
import clipIcon from '@app/assets/icons/clip-icon.svg?raw';
import sendMessageIcon from '@app/assets/icons/right-arrow-icon.svg?raw';

import Block from '@app/block.ts';

export class Message extends Block<{}> {
  static componentName = 'Message';

  protected template = templateSource;

  constructor() {
    super({ sendMessageIcon, clipIcon, styles });
  }

  public setProps(props: any) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
