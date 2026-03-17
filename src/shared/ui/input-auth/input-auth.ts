import Block from '../../lib/block';
import type { InputProps } from '../../types';
import templateSource from './input-auth.hbs?raw';
import styles from './input-auth.module.css';

export class InputAuth extends Block<InputProps> {
  static componentName = 'InputAuth';

  protected template = templateSource;

  constructor(props: InputProps) {
    super({ ...props, styles });
  }

  public setProps(props: InputProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}
}
