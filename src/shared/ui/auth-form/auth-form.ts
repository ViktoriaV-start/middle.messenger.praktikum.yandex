import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';

import Block from '@app/block.ts';
import type { AuthFormProps } from '@shared/types';

export class AuthForm extends Block<AuthFormProps> {
  static componentName = 'AuthForm';

  protected template = templateSource;

  constructor(props: any) {
    super({ ...props, styles });
  }

  public setProps(props: any) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
