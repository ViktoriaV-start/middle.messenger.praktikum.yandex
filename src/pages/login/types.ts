import type { FormControlItem } from '@shared/types';
import type { BlockOwnProps } from '@shared/types/global-types.ts';

export interface FormItem {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export interface LoginForm {
  login: FormItem;
  password: FormItem;
}

export interface LoginProps extends BlockOwnProps {
  data: LoginForm;
  formControl: FormControlItem;
  styles?: Record<string, string>;
}
