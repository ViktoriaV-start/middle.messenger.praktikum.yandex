import Block from '@app/block.ts';
import templateSource from './registration.hbs?raw';
import { REGISTRATION_FORM } from '@pages/registration/constants.ts';
import { FORM_CONTROL } from '@shared/constants';
import styles from './registration.module.css';
import type { RegistrationProps } from '@pages/registration/types.ts';
import { getFormData } from '@shared/utils/form/getFormData.ts';

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

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);

      console.log(formData);
    },
  };
}
