import { FORM_CONTROL } from '@shared/constants';
import Block from '@shared/lib/block';
import { getFormData } from '@shared/utils/form';
import { REGISTRATION_FORM } from '../../constants';
import type { RegistrationProps } from '../../types';
import templateSource from './registration.hbs?raw';
import styles from './registration.module.css';

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
