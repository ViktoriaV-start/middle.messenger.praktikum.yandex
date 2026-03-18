import { URLS } from '@shared/constants';
import Block from '@shared/lib/block';
import { getFormData } from '@shared/utils/form';
import { BUTTONS, PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import styles from '../profile.module.css';
import templateSource from './edit-profile.hbs?raw';

export class EditProfile extends Block<Record<string, unknown>> {
  static componentName = 'EditProfile';

  protected template = templateSource;

  constructor() {
    const data = {
      user: USER,
      exitLinkTitle: 'Выйти',
      chatLink: URLS.login,
      profileInputs: PROFILE_INPUTS,
      profileLinks: PROFILE_LINKS,
      button: {
        title: BUTTONS.save,
      },
    };
    super({ ...data, styles });
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
