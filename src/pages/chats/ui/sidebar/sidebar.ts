import { URLS, CHATS } from '@shared/constants';
import Block from '@shared/lib/block';
import templateSource from './sidebar.hbs?raw';
import styles from './sidebar.module.css';

export class Sidebar extends Block<object> {
  static componentName = 'Sidebar';

  protected template = templateSource;

  constructor() {
    const data = {
      chats: CHATS,
      urls: URLS,
    };
    super({ ...data, styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
