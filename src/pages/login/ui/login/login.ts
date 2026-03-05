import Handlebars from 'handlebars';
import templateSource from './login.hbs?raw';
import styles from './login.module.css';
import { AuthForm } from '@shared/ui/auth-form';
import { LOGIN_FORM } from '../../constants';
import { FORM_CONTROL } from '@shared/constants';

const template = Handlebars.compile(templateSource);

export function Login() {
  const loginForm = AuthForm(LOGIN_FORM, FORM_CONTROL.login);

  return template({
    styles,
    loginForm: loginForm,
  });
}
