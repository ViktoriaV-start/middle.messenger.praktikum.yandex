import Block from '@shared/lib/block';
import { convertKeysToSnakeCase } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { BUTTONS, PASSWORD, PASSWORD_INPUTS } from '../../constants';
import type { EditPasswordProps } from '../../types';
import styles from '../profile.module.css';
import templateSource from './edit-password.hbs?raw';

export class EditPassword extends Block<Record<string, unknown>> {
  static componentName = 'EditPassword';

  protected template = templateSource;
  private error = false;

  constructor() {
    const initialEditPasswordData = {
      password: PASSWORD,
      button: BUTTONS.save,
      error: false,
      passwordInputs: PASSWORD_INPUTS,
    };
    super({ ...initialEditPasswordData, styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  public setProps(props: EditPasswordProps) {
    super.setProps({ ...props, error: this.error });
  }

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);

      const arePasswordsCorrect = formData.newPassword === formData.repeatedPassword;

      const form = normalizeValidateForm(formData);

      if (form.error || !arePasswordsCorrect) {
        this.error = true;
        this.setProps({ ...this.props, error: true });
      }

      const dataDTO = convertKeysToSnakeCase(form.validatedForm);

      console.log('Данный формы - Пароль: ', dataDTO);
    },
    focusin: () => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }
    },
  };
}
