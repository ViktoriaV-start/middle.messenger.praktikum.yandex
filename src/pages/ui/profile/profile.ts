import Handlebars from 'handlebars';
import templateSource from './profile.hbs?raw';
import styles from './profile.module.css';
import { PROFILE_BUTTONS, PROFILE_INPUTS, USER } from '@pages/constants';
import { Input } from '@shared/ui/input';
import { URLS } from '@shared/constants';
import { BaseButton } from '@shared/ui/base-button';

const template = Handlebars.compile(templateSource);

export function Profile() {
  const profileInputs = Object.values(PROFILE_INPUTS)
    .map((input) => {
      const inputName = input.name;

      return Input({ ...input, value: USER[inputName] }, false);
    })
    .join('');

  const loginLink = URLS.login;

  const buttons = Object.values(PROFILE_BUTTONS)
    .map((buttonTitle) => {
      return BaseButton(buttonTitle, [styles['profile__button_mbe'], styles['profile__button']]);
    })
    .join('');

  return template({
    styles,
    userName: USER.firstName,
    profileInputs,
    buttons,
    loginLink,
  });
}
