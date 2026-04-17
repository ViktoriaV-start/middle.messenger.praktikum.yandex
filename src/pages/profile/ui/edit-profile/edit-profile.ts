import { EditProfileApi } from '@shared/api';
import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { User } from '@shared/types';
import { convertKeysToCamelCase, convertKeysToSnakeCase } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { BUTTONS, PROFILE_INPUTS } from '../../constants';
import type { EditProfileProps } from '../../types';
import styles from '../profile.module.css';
import templateSource from './edit-profile.hbs?raw';

const COMPONENT_NAME = 'EditProfile';

export class EditProfile extends Block<EditProfileProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private error = false;

  constructor() {
    const user = store.getState().user as User;

    const initialEditProfileData = {
      user,
      profileInputs: PROFILE_INPUTS,
      button: BUTTONS.save,
      error: false,
    };
    super({ ...initialEditProfileData, componentName: COMPONENT_NAME, styles });
  }

  public setProps(props: EditProfileProps) {
    super.setProps({ ...props, error: this.error });
  }

  getContent() {
    this.render();

    return this.element();
  }

  private async handleSubmit(
    data: Record<string, unknown>
  ): Promise<Record<string, unknown> | null> {
    const dataDTO = convertKeysToSnakeCase(data);

    try {
      const response = (await EditProfileApi.editProfile(dataDTO)) as Record<string, unknown>;

      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }

    return null;
  }

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);

      const form = normalizeValidateForm(formData);

      if (form.error) {
        this.error = true;
        this.setProps({ ...this.props, error: true });
      }

      this.handleSubmit(form.validatedForm).then((user) => {
        if (user) {
          const userConverted = convertKeysToCamelCase(user) as unknown as User;

          this.setProps({
            ...this.props,
            user: userConverted,
          });

          store.setUser(userConverted);
        }
      });
    },
    focusin: () => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }
    },
  };
}
