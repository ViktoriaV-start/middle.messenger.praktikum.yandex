import templateSource from './navigation.hbs?raw';
import styles from './navigation.module.css';

import Block from '@app/block.ts';
import { URLS } from '@shared/constants';

export class Navigation extends Block<{}> {
  static componentName = 'Navigation';

  protected template = templateSource;

  constructor() {
    super({ ...URLS, styles });
  }

  public setProps(props: any) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
