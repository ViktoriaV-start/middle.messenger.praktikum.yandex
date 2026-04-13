import { type BlockOwnProps, FormType, type LoginForm, type FormControlItem } from '@shared/types';
import type { REGISTRATION_FORM } from './constants';

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
  componentName: string;
  formType: FormType;
  styles?: Record<string, string>;
}
