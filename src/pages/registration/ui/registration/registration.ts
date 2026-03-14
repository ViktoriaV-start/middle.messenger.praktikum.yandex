// import Handlebars from 'handlebars';
// import templateSource from './registration.hbs?raw';
// import styles from './registration.module.css';
//
// import { AuthForm } from '@shared/ui/auth-form';
// import { FORM_CONTROL } from '@shared/constants';
// import { REGISTRATION_FORM } from '@pages/registration/constants.ts';
//
// const template = Handlebars.compile(templateSource);
//
// export function Registration() {
//   const registrationForm = AuthForm(REGISTRATION_FORM, FORM_CONTROL.registration);
//
//   return template({
//     styles,
//     registrationForm,
//   });
// }

import Block from '@app/block.ts';
import templateSource from './registration.hbs?raw';
import { REGISTRATION_FORM } from '@pages/registration/constants.ts';
import { FORM_CONTROL } from '@shared/constants';
import styles from './registration.module.css';
import type { RegistrationProps } from '@pages/registration/types.ts';

export class Registration extends Block<RegistrationProps> {
  static componentName = 'Registration';
  protected template = templateSource;

  constructor() {
    super({
      data: REGISTRATION_FORM,
      formControl: FORM_CONTROL.registration,
      styles,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
