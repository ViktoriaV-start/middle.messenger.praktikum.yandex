import Block from '../../lib/block';
import type { AuthFormProps } from '../../types';
import { getFormData } from '../../utils/form';
import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';

export class AuthForm extends Block<AuthFormProps> {
  static componentName = 'AuthForm';

  protected template = templateSource;

  constructor(props: AuthFormProps) {
    super({ ...props, styles });
  }

  public setProps(props: AuthFormProps) {
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
