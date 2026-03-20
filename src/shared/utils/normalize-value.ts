import {
  MAX_NAME_LENGTH,
  MORE_THAN_ONE_SPACE_REG_EXP,
  NOT_LETTER_OR_HYPHEN_REGEXP,
  UNALLOWED_EMAIL_CHARS_REGEXP,
  UNALLOWED_LOGIN_CHARACTERS_REGEXP,
  UNALLOWED_PHONE_CHARS_REGEXP,
  UNALLOWED_TEXT_CHARACTERS_REGEXP,
} from '../constants';

interface NormalizeValue {
  value: string;
  name: string;
}

export const normalizeValue = ({ value, name }: NormalizeValue): string => {
  switch (name) {
    case 'message': {
      const normalizedMessage = value
        .replace(UNALLOWED_TEXT_CHARACTERS_REGEXP, '')
        .replace(MORE_THAN_ONE_SPACE_REG_EXP, ' ');

      return normalizedMessage;
    }
    case 'displayName': {
      const normalizedMessage = value
        .replace(UNALLOWED_TEXT_CHARACTERS_REGEXP, '')
        .replace(MORE_THAN_ONE_SPACE_REG_EXP, ' ')
        .slice(0, MAX_NAME_LENGTH);

      return normalizedMessage;
    }
    case 'login': {
      return value.replace(UNALLOWED_LOGIN_CHARACTERS_REGEXP, '');
    }
    case 'password': {
      return value;
    }
    case 'firstName':
    case 'secondName': {
      const normalisedName = value.replace(NOT_LETTER_OR_HYPHEN_REGEXP, '').toLowerCase();
      const transformedName =
        normalisedName.charAt(0).toUpperCase() + normalisedName.slice(1).toLowerCase();

      return transformedName;
    }
    case 'email': {
      return value.replace(UNALLOWED_EMAIL_CHARS_REGEXP, '');
    }
    case 'phone': {
      return value.replace(UNALLOWED_PHONE_CHARS_REGEXP, '');
    }
    default: {
      return '';
    }
  }
};
