import { URLS } from '@shared/constants';
import Block from '@shared/lib/block';
import { convertKeysToSnakeCase } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { BUTTONS, PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import type { EditProfileProps } from '../../types';
import styles from '../profile.module.css';
import templateSource from './edit-profile.hbs?raw';

export class EditProfile extends Block<EditProfileProps> {
  static componentName = 'EditProfile';

  protected template = templateSource;
  private error = false;

  constructor() {
    const initialEditProfileData = {
      user: USER,
      exitLinkTitle: 'Выйти',
      chatLink: URLS.login,
      profileInputs: PROFILE_INPUTS,
      profileLinks: PROFILE_LINKS,
      button: BUTTONS.save,
      error: false,
    };
    super({ ...initialEditProfileData, styles });
  }

  public setProps(props: EditProfileProps) {
    super.setProps({ ...props, error: this.error });
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

      console.log('Данный формы - Профиль: ', dataDTO);
    },
    focusin: () => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }
    },
  };
}
