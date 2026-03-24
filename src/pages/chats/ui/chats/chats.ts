import Block from '@shared/lib/block';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';

const COMPONENT_NAME = 'Chats';

export class Chats extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ componentName: COMPONENT_NAME, styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
