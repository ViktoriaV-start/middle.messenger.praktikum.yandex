import Handlebars from 'handlebars';
import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';
import type { AuthInputItem, FormControlItem } from '@shared/types';
import { InputAuth } from '@shared/ui/input-auth';
import { BaseButton } from '@shared/ui/base-button';

const template = Handlebars.compile(templateSource);

export function AuthForm(data: Record<string, AuthInputItem>, formControl: FormControlItem) {
  const inputs = Object.values(data)
    .map((item) => {
      return InputAuth(item);
    })
    .join('');

  const button = BaseButton(formControl.buttonTitle);
  const linkTitle = formControl.linkTitle;
  const link = formControl.link;

  return template({
    styles,
    inputs,
    button,
    linkTitle,
    link,
  });
}
