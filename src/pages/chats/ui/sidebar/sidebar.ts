import { URLS, CHATS } from '@shared/constants';
import Block from '@shared/lib/block';
import templateSource from './sidebar.hbs?raw';
import styles from './sidebar.module.css';

const COMPONENT_NAME = 'Sidebar';

export class Sidebar extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    const data = {
      chats: CHATS,
      urls: URLS,
    };
    super({ ...data, componentName: COMPONENT_NAME, styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
