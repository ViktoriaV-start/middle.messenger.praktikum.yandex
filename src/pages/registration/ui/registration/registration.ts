import Handlebars from 'handlebars';
import templateSource from './registration.hbs?raw';
import styles from './registration.module.css';

import { AuthForm } from '@shared/ui/auth-form';
import { FORM_CONTROL } from '@shared/constants';
import { REGISTRATION_FORM } from '@pages/registration/constants.ts';

const template = Handlebars.compile(templateSource);

export function Registration() {
  const registrationForm = AuthForm(REGISTRATION_FORM, FORM_CONTROL.registration);

  return template({
    styles,
    registrationForm,
  });
}
