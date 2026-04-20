import Block from '@shared/lib/block';
import templateSource from './message-in.hbs?raw';
import styles from './message-in.module.css';

const COMPONENT_NAME = 'MessageIn';

export class MessageIn extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ componentName: COMPONENT_NAME, styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
