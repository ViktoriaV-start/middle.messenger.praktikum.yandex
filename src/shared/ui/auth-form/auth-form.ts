import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';

import Block from '@app/block.ts';
import type { AuthFormProps } from '@shared/types';
import { getFormData } from '@shared/utils/form/getFormData.ts';

export class AuthForm extends Block<AuthFormProps> {
  static componentName = 'AuthForm';

  protected template = templateSource;

  constructor(props: any) {
    super({ ...props, styles });
  }

  public setProps(props: any) {
    super.setProps(props);
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
