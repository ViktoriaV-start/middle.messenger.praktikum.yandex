import templateSource from './chat-messages.hbs?raw';
import styles from './chat-messages.module.css';

import Block from '@app/block.ts';

export class ChatMessages extends Block<{}> {
  static componentName = 'ChatMessages';

  protected template = templateSource;

  constructor() {
    super({ styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
