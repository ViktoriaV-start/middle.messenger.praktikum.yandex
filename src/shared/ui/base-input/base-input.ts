import Block from '../../lib/block';
import type { BaseInputProps } from '../../types';
import templateSource from './base-input.hbs?raw';
import styles from './base-input.module.css';

const COMPONENT_NAME = 'BaseInput';

export class BaseInput extends Block<BaseInputProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor(props: BaseInputProps) {
    super({ ...props, componentName: BaseInput.componentName, styles });
  }

  public setProps(props: BaseInputProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}
}
