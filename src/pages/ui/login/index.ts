import Handlebars from 'handlebars';
import templateSource from './login.hbs?raw';
import styles from './login.module.css';
import { FORM_CONTROL, LOGIN_FORM } from '@shared/constants';
import { AuthForm } from '@shared/ui/auth-form';

const template = Handlebars.compile(templateSource);

export function Login() {
  const loginForm = AuthForm(LOGIN_FORM, FORM_CONTROL.login);

  return template({
    styles,
    loginForm: loginForm,
  });
}
