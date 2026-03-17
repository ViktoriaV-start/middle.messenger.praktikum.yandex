import Block from '@shared/lib/block';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';

export class Chats extends Block<object> {
  static componentName = 'Chats';

  protected template = templateSource;

  constructor() {
    super({ styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
