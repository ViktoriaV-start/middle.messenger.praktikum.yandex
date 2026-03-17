import { FORM_CONTROL } from '@shared/constants';
import Block from '@shared/lib/block';
import type { LoginProps } from '@shared/types';
import { LOGIN_FORM } from '../../constants';
import templateSource from './login.hbs?raw';
import styles from './login.module.css';

export class Login extends Block<LoginProps> {
  static componentName = 'Login';
  protected template = templateSource;

  constructor() {
    super({
      data: LOGIN_FORM,
      formControl: FORM_CONTROL.login,
      styles,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
