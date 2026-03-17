import Block from '@app/block.ts';
import styles from '../profile.module.css';
import templateSource from './edit-profile.hbs?raw';
import { BUTTONS, PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import { URLS } from '@shared/constants';
import { getFormData } from '@shared/utils/form/getFormData.ts';

export class EditProfile extends Block<{}> {
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
