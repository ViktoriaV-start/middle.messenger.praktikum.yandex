import Block from '../../lib/block';
import type { BaseButtonProps } from '../../types';
import templateSource from './base-button.hbs?raw';
import styles from './base-button.module.css';

const COMPONENT_NAME = 'BaseButton';

export class BaseButton extends Block<BaseButtonProps> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor(props: BaseButtonProps) {
    super({ ...props, componentName: COMPONENT_NAME, styles });
  }

  public setProps(props: BaseButtonProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
