import type { BlockOwnProps, User } from '@shared/types';
import { PASSWORD_INPUTS, PROFILE_INPUTS, PROFILE_LINKS } from './constants';

export interface ProfileItem {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export interface PasswordInput {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export interface linkItem {
  title: string;
  type: string;
}

export type Profile = Record<keyof typeof PROFILE_INPUTS, ProfileItem>;

export type Links = Record<keyof typeof PROFILE_LINKS, linkItem>;

export type EditPasswordFields = Record<keyof typeof PASSWORD_INPUTS, PasswordInput>;

export interface EditProfileProps extends BlockOwnProps {
  user?: User;
  exitLinkTitle?: string;
  chatLink?: string;
  profileInputs?: Profile;
  profileLinks?: Links;
  button?: string;
  error?: boolean;
  componentName: string;
  styles?: Record<string, string>;
}

export interface EditPasswordProps extends BlockOwnProps {
  button?: string;
  error?: boolean;
  passwordInputs?: EditPasswordFields;
}
