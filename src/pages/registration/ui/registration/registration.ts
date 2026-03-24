import { FORM_CONTROL } from '@shared/constants';
import Block from '@shared/lib/block';
import { REGISTRATION_FORM } from '../../constants';
import type { RegistrationProps } from '../../types';
import templateSource from './registration.hbs?raw';
import styles from './registration.module.css';

const COMPONENT_NAME = 'Registration';

export class Registration extends Block<RegistrationProps> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor() {
    super({
      data: REGISTRATION_FORM,
      formControl: FORM_CONTROL.registration,
      componentName: COMPONENT_NAME,
      styles,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}
}
