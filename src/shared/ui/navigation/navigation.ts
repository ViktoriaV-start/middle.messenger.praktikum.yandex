import { URLS } from '../../constants';
import Block from '../../lib/block';
import templateSource from './navigation.hbs?raw';
import styles from './navigation.module.css';

const COMPONENT_NAME = 'Navigation';

export class Navigation extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ ...URLS, componentName: COMPONENT_NAME, styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
