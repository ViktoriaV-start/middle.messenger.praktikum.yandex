import templateSource from './sidebar.hbs?raw';

import Block from '@app/block.ts';
import { URLS, CHATS } from '@shared/constants';
import styles from './sidebar.module.css';

export class Sidebar extends Block<{}> {
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
