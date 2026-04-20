import { FORM_CONTROL } from '@shared/constants';
import Block from '@shared/lib/block';
import { FormType, type LoginProps } from '@shared/types';
import { LOGIN_FORM } from '../../constants';
import templateSource from './login.hbs?raw';
import styles from './login.module.css';

const COMPONENT_NAME = 'Login';

export class Login extends Block<LoginProps> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor() {
    super({
      data: LOGIN_FORM,
      formControl: FORM_CONTROL.login,
      componentName: COMPONENT_NAME,
      formType: FormType.Login,
      styles,
    });
  }

  getContent() {
    this.render();

    return this.element();
  }
}
