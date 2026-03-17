import templateSource from './message-out.hbs?raw';
import styles from './message-out.module.css';

import Block from '@app/block.ts';

export class MessageOut extends Block<{}> {
  static componentName = 'MessageOut';

  protected template = templateSource;

  constructor() {
    super({ styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
