import Block from '@shared/lib/block';
import templateSource from './message-in.hbs?raw';
import styles from './message-in.module.css';

export class MessageIn extends Block<object> {
  static componentName = 'MessageIn';

  protected template = templateSource;

  constructor() {
    super({ styles });
  }

  public setProps() {}

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
