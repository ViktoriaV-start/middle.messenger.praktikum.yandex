import templateSource from './chats.hbs?raw';

import Block from '@app/block.ts';
import styles from './chats.module.css';

export class Chats extends Block<{}> {
  static componentName = 'Chats';

  protected template = templateSource;

  constructor() {
    super({ styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
