import Block from '../../lib/block';
import type { ConfirmationProps } from '../../types';
import templateSource from './confirmation.hbs?raw';
import styles from './confirmation.module.css';

const COMPONENT_NAME = 'Confirmation';

export class Confirmation extends Block<ConfirmationProps> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor(props: ConfirmationProps) {
    super({ ...props, componentName: COMPONENT_NAME, styles });
  }

  public setProps(props: ConfirmationProps) {
    super.setProps(props);
  }
}
