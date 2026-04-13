import { EditProfileApi } from '@shared/api/edit-profile';
import { SUCCESS } from '@shared/constants';
import Block from '@shared/lib/block';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { BUTTONS, PASSWORD, PASSWORD_INPUTS } from '../../constants';
import type { EditPasswordProps } from '../../types';
import styles from '../profile.module.css';
import templateSource from './edit-password.hbs?raw';

const COMPONENT_NAME = 'EditPassword';

export class EditPassword extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private error = false;

  constructor() {
    const initialEditPasswordData = {
      password: PASSWORD,
      button: BUTTONS.save,
      error: false,
      passwordInputs: PASSWORD_INPUTS,
    };
    super({ ...initialEditPasswordData, componentName: COMPONENT_NAME, styles });
  }

  private async handleSubmit(data: Record<string, unknown>): Promise<boolean> {
    const { oldPassword, newPassword } = data;

    try {
      const response = await EditProfileApi.editPassword({
        oldPassword: oldPassword as string,
        newPassword: newPassword as string,
      });

      if (response && response === SUCCESS) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  getContent() {
    this.render();

    return this.element();
  }

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

      if (!this.error) {
        this.handleSubmit(form.validatedForm);
      }
    },
    focusin: () => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }
    },
  };
}
