import { URLS } from '../constants';
import type { BlockOwnProps } from '../types';

export enum FormType {
  Login = 'login',
  Registration = 'registration',
}

export interface InfoProps extends BlockOwnProps {
  title: string;
  text: string;
  link: string;
  linkTitle: string;
  componentName: string;
  styles?: Record<string, string>;
}

export interface InputProps extends BlockOwnProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  componentName: string;
  styles?: Record<string, string>;
  autofocus?: boolean;
}

export interface EditableInputProps extends InputProps {
  isEditable?: boolean;
  readonly?: string;
  editableClass?: string;
}

export interface AuthFormProps extends BlockOwnProps {
  data: Record<string, InputProps>;
  formControl: FormControlItem;
  componentName: string;
  styles?: Record<string, string>;
  error: boolean;
}

export interface BaseButtonProps extends BlockOwnProps {
  title: string;
  type: string;
  classNames: string;
  componentName: string;
  styles?: Record<string, string>;
  additionalStyles?: string;
}

export interface BaseLinkProps extends BlockOwnProps {
  title: string;
  href: string;
  classNames: string;
  color: string;
  componentName: string;
  additionalStyles?: string;
  styles?: Record<string, string>;
  type: string | null;
}

export interface FormControlItem {
  buttonTitle: string;
  linkTitle: string;
  link: (typeof URLS)[keyof typeof URLS];
}

export interface FormControl {
  login: FormControlItem;
  registration: FormControlItem;
}

export interface User {
  email: string;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  phone: string;
  avatar?: string;
}

export interface ChatItemProps extends BlockOwnProps {
  id: number;
  avatarUrl: string;
  title: string;
  unreadCount?: number;
  lastMessage?: {
    text: string;
    time: string;
  };
  componentName: string;
  styles?: Record<string, string>;
  unreadCountClass?: string;
}

export interface BackButtonProps extends BlockOwnProps {
  backUrl: string;
  icon: string;
  componentName: string;
  styles?: Record<string, string>;
}

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
  componentName: string;
  formType: FormType;
  styles?: Record<string, string>;
}
