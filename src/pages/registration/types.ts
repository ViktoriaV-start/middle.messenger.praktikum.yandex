import type { REGISTRATION_FORM } from '@pages/registration/constants.ts';
import type { BlockOwnProps } from '@shared/types/global-types.ts';
import type { FormControlItem } from '@shared/types';
import type { LoginForm } from '@pages/login/types.ts';

export interface RegistrationFormItem {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export type RegistrationFormKeys = keyof typeof REGISTRATION_FORM;

export type RegistrationForm = Record<RegistrationFormKeys, RegistrationFormItem>;

export interface RegistrationProps extends BlockOwnProps {
  data: LoginForm;
  formControl: FormControlItem;
  styles?: Record<string, string>;
}
