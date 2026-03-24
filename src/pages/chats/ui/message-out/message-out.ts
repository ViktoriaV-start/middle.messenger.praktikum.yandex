import Block from '@shared/lib/block';
import templateSource from './message-out.hbs?raw';
import styles from './message-out.module.css';

const COMPONENT_NAME = 'MessageOut';

export class MessageOut extends Block<Record<string, unknown>> {
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
