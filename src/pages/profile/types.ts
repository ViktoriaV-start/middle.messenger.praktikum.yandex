import { PASSWORD_INPUTS, PROFILE_INPUTS } from './constants';

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

export type Profile = Record<keyof typeof PROFILE_INPUTS, ProfileItem>;

export type EditPassword = Record<keyof typeof PASSWORD_INPUTS, PasswordInput>;
