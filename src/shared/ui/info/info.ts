import Block from '../../lib/block';
import type { InfoProps } from '../../types';
import templateSource from './info.hbs?raw';
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
