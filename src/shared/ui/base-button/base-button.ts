import Block from '../../lib/block';
import type { BaseButtonProps } from '../../types';
import templateSource from './base-button.hbs?raw';
import styles from './base-button.module.css';

export class BaseButton extends Block<BaseButtonProps> {
  static componentName = 'BaseButton';
  protected template = templateSource;

  constructor(props: BaseButtonProps) {
    super({ ...props, styles });
  }

  public setProps(props: BaseButtonProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
