import Block from '@shared/lib/block';
import templateSource from './chat-messages.hbs?raw';
import styles from './chat-messages.module.css';

export class ChatMessages extends Block<Record<string, unknown>> {
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
