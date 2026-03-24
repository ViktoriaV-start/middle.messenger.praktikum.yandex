import Block from '../../lib/block';
import type { AuthFormProps } from '../../types';
import { convertKeysToSnakeCase } from '../../utils';
import { getFormData } from '../../utils/form';
import { normalizeValidateForm } from '../../utils/normalize-validate-form';
import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';

const COMPONENT_NAME = 'AuthForm';

export class AuthForm extends Block<AuthFormProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private error = false;

  constructor(props: AuthFormProps) {
    super({ ...props, componentName: COMPONENT_NAME, styles, error: false });
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

      const form = normalizeValidateForm(formData);

      if (form.error) {
        this.error = true;
        this.setProps({ ...this.props, error: true });
      }

      const dataDTO = convertKeysToSnakeCase(form.validatedForm);

      console.log('Данные формы: ', dataDTO);
    },
    focusin: () => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }
    },
  };
}
