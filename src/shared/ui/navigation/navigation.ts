import { URLS } from '../../constants';
import Block from '../../lib/block';
import templateSource from './navigation.hbs?raw';
import styles from './navigation.module.css';

export class Navigation extends Block<Record<string, unknown>> {
  static componentName = 'Navigation';

  protected template = templateSource;

  constructor() {
    super({ ...URLS, styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
