import Block from '../../lib/block';
import type { BaseButtonProps } from '../../types';
import templateSource from './base-button.hbs?raw';
import baseStyles from './base-button.module.css';

export class BaseButton extends Block<BaseButtonProps> {
  static componentName = 'BaseButton';
  protected template = templateSource;

  constructor(props: BaseButtonProps) {
    const styles = {
      ...baseStyles,
      ...props.styles,
    };

    const classNames = props.styles
      ? `${styles['base-button']} ${props.styles}`
      : `${styles['base-button']}`;

    super({ ...props, styles, classNames });
  }

  public setProps(props: BaseButtonProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
