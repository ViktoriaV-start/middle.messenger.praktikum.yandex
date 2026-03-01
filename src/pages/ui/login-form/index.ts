import Handlebars from 'handlebars';
import templateSource from './login-form.hbs?raw';
import styles from './login-form.module.css';
import { InputAuth } from '@shared/ui/input-auth';
import { BaseButton } from '@shared/ui/base-button';
import { URLS } from '@shared/constants';

const template = Handlebars.compile(templateSource);

const LOGIN_INPUTS = {
  login: {
    type: 'text',
    name: 'login',
    placeholder: 'Логин',
    label: 'Логин',
  },
  password: {
    type: 'text',
    name: 'password',
    placeholder: 'Пароль',
    label: 'Пароль',
  },
};

const BUTTONS = {
  login: 'Авторизоваться',
};

export function LoginForm() {
  const inputLogin = InputAuth(LOGIN_INPUTS.login);
  const inputPassword = InputAuth(LOGIN_INPUTS.password);
  const loginButton = BaseButton(BUTTONS.login);

  return template({
    styles,
    URLS,
    inputLogin: inputLogin,
    inputPassword: inputPassword,
    loginButton: loginButton,
  });
}
