import Handlebars from 'handlebars';
import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';
import type { InputProps, FormControlItem } from '@shared/types';
import { InputAuth } from '@shared/ui/input-auth';
import { BaseButton } from '@shared/ui/base-button';
import { BaseLink } from '@shared/ui/base-link';

const template = Handlebars.compile(templateSource);

export function AuthForm(data: Record<string, InputProps>, formControl: FormControlItem) {
  const inputs = Object.values(data)
    .map((item) => {
      return InputAuth(item);
    })
    .join('');

  const button = BaseButton(formControl.buttonTitle);
  const link = BaseLink(formControl.linkTitle, formControl.link);

  return template({
    styles,
    inputs,
    button,
    link,
  });
}
