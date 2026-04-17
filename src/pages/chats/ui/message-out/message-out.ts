import Block from '@shared/lib/block';
import templateSource from './message-out.hbs?raw';
import styles from './message-out.module.css';

export class MessageOut extends Block<Record<string, unknown>> {
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
