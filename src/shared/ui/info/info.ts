import templateSource from './info.hbs?raw';
import type { InfoProps } from '@shared/types';

import Block from '@app/block.ts';
import styles from './info.module.css';

export class Info extends Block<InfoProps> {
  static componentName = 'Info';

  protected template = templateSource;

  constructor(props: InfoProps) {
    super({ ...props, styles });
  }

  public setProps(props: InfoProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
