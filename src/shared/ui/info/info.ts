import Block from '../../lib/block';
import type { InfoProps } from '../../types';
import templateSource from './info.hbs?raw';
import styles from './info.module.css';

const COMPONENT_NAME = 'Info';

export class Info extends Block<InfoProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor(props: InfoProps) {
    super({ ...props, componentName: COMPONENT_NAME, styles });
  }

  public setProps(props: InfoProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
