import Handlebars from 'handlebars';
import templateSource from './edit-password.hbs?raw';
import styles from '../profile.module.css';
import { BUTTONS, PASSWORD_INPUTS } from '../../constants';
import { Input } from '@shared/ui/input';
import { URLS } from '@shared/constants';
import { BaseButton } from '@shared/ui/base-button';

const template = Handlebars.compile(templateSource);

export function EditPassword() {
  const passwordInputs = Object.values(PASSWORD_INPUTS)
    .map((input) => {
      return Input({ ...input }, true);
    })
    .join('');

  const loginLink = URLS.login;

  const saveBtn = BaseButton(BUTTONS.save, [styles['profile__save-button']]);

  return template({
    styles,
    passwordInputs,
    loginLink,
    saveBtn,
  });
}
