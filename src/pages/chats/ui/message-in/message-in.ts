import templateSource from './message-in.hbs?raw';
import styles from './message-in.module.css';

import Block from '@app/block.ts';

export class MessageIn extends Block<{}> {
  static componentName = 'MessageIn';

  protected template = templateSource;

  constructor() {
    super({ styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
