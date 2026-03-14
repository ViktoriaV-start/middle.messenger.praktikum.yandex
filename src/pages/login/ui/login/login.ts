import Block from '@app/block.ts';
import templateSource from './login.hbs?raw';
import { LOGIN_FORM } from '../../constants';
import { FORM_CONTROL } from '@shared/constants';
import styles from './login.module.css';
import type { LoginProps } from '@pages/login/types.ts';

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
