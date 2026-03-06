import Handlebars from 'handlebars';
import templateSource from './profile.hbs?raw';
import styles from '../profile.module.css';
import { PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import { Input } from '@shared/ui/input';
import { URLS } from '@shared/constants';
import { BaseLink } from '@shared/ui/base-link';

const template = Handlebars.compile(templateSource);

export function Profile() {
  const profileInputs = Object.values(PROFILE_INPUTS)
    .map((input) => {
      const inputName = input.name;

      return Input({ ...input, value: USER[inputName] });
    })
    .join('');

  const loginLink = URLS.login;
  const editProfileLink = URLS.editProfile;

  const editLinks = Object.values(PROFILE_LINKS)
    .map((item) => {
      const link = BaseLink(item.title, item.type);
      return `<li>${link}</li>`;
    })
    .join('');

  const exitLink = BaseLink('Выйти', 'exit');

  return template({
    styles,
    userName: USER.firstName,
    editProfileLink,
    profileInputs,
    loginLink,
    editLinks,
    exitLink,
  });
}
