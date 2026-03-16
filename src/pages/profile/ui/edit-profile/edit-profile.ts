// import Handlebars from 'handlebars';
// import templateSource from './edit-profile.hbs?raw';
// import styles from '../profile.module.css';
// import { BUTTONS, PROFILE_INPUTS, USER } from '../../constants';
// import { Input } from '@shared/ui/input';
// import { URLS } from '@shared/constants';
// import { BaseButton } from '@shared/ui/base-button';
//
// const template = Handlebars.compile(templateSource);
//
// export function EditProfile() {
//   const profileInputs = Object.values(PROFILE_INPUTS)
//     .map((input) => {
//       const inputName = input.name;
//
//       return Input({ ...input, value: USER[inputName] }, true);
//     })
//     .join('');
//
//   const loginLink = URLS.login;
//
//   const saveBtn = BaseButton(BUTTONS.save, [styles['profile__save-button']]);
//
//   return template({
//     styles,
//     profileInputs,
//     loginLink,
//     saveBtn,
//   });
// }

import Block from '@app/block.ts';
import styles from '../profile.module.css';
import templateSource from './edit-profile.hbs?raw';
import { BUTTONS, PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import { URLS } from '@shared/constants';

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

  protected events = {};
}
