import Handlebars from 'handlebars';
import templateSource from './registration.hbs?raw';
import styles from './registration.module.css';

import { AuthForm } from '@shared/ui/auth-form';
import { FORM_CONTROL, REGISTRATION_FORM } from '@pages/constants';

const template = Handlebars.compile(templateSource);

export function Registration() {
  const registrationForm = AuthForm(REGISTRATION_FORM, FORM_CONTROL.registration);

  return template({
    styles,
    registrationForm,
  });
}
