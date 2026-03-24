import Block from '@shared/lib/block';
import templateSource from './chat-messages.hbs?raw';
import styles from './chat-messages.module.css';

const COMPONENT_NAME = 'ChatMessages';

export class ChatMessages extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ componentName: COMPONENT_NAME, styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
