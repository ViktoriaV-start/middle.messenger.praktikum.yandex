import type { BlockOwnProps } from '@shared/types/global-types.ts';
import { URLS } from '@shared/constants';

export interface InfoProps extends BlockOwnProps {
  title: string;
  text: string;
  link: string;
  linkTitle: string;
  styles?: Record<string, string>;
}

export interface InputProps extends BlockOwnProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  styles?: Record<string, string>;
}

export interface EditableInputProps extends InputProps {
  isEditable?: boolean;
  readonly?: string;
  editableClass?: string;
}

export interface AuthFormProps extends BlockOwnProps {
  data: Record<string, InputProps>;
  formControl: FormControlItem;
}

export interface BaseButtonProps extends BlockOwnProps {
  title: string;
  type: string;
  classNames: string;
  styles?: Record<string, string>;
}

export interface BaseLinkProps extends BlockOwnProps {
  title: string;
  href: string;
  classNames: string;
  styles?: Record<string, string>;
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
  display_name: string;
  phone: string;
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
  styles?: Record<string, string>;
}

export interface BackButtonProps extends BlockOwnProps {
  backUrl: string;
  icon: string;
  styles?: Record<string, string>;
}
