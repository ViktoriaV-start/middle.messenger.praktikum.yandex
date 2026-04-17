import {
  FIRST_LETTER_CAPITAL_REGEXP,
  HAS_AT_AND_DOT_WITH_LETTERS_REGEXP,
  MAX_LOGIN_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_PHONE_LENGTH,
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_PHONE_LENGTH,
  ONE_CAPITAL_LETTER_REGEXP,
  ONE_DIGIT_REGEXP,
  ONLY_DIGITS_REGEXP,
  PHONE_REGEXP,
} from '../constants';

interface ValidateValue {
  value: string;
  name: string;
}

const validateLogin = (value: string): boolean => {
  const loginLength = value.length;
  const isLengthValid =
    !!loginLength && loginLength >= MIN_LOGIN_LENGTH && loginLength <= MAX_LOGIN_LENGTH;

  const isCharsValid = !ONLY_DIGITS_REGEXP.test(value);

  const isValueValid = isLengthValid && isCharsValid;

  return isValueValid;
};

const validatePassword = (value: string): boolean => {
  const passwordLength = value.length;
  const isLengthValid =
    !!passwordLength &&
    passwordLength >= MIN_PASSWORD_LENGTH &&
    passwordLength <= MAX_PASSWORD_LENGTH;

  const isCharsValid = ONE_CAPITAL_LETTER_REGEXP.test(value) && ONE_DIGIT_REGEXP.test(value);

  const isValueValid = isLengthValid && isCharsValid;

  return isValueValid;
};

const validateName = (value: string): boolean => {
  const isNameValid = FIRST_LETTER_CAPITAL_REGEXP.test(value);

  return isNameValid;
};

const validateEmail = (value: string): boolean => {
  const isEmailValid = HAS_AT_AND_DOT_WITH_LETTERS_REGEXP.test(value);

  return isEmailValid;
};

const validatePhone = (value: string): boolean => {
  const phoneLength = value.length;

  const isLengthValid =
    !!phoneLength && phoneLength >= MIN_PHONE_LENGTH && phoneLength <= MAX_PHONE_LENGTH;
  const isStructureValid = PHONE_REGEXP.test(value);
  const isEmailValid = isLengthValid && isStructureValid;

  return isEmailValid;
};

export const validateValue = ({ value, name }: ValidateValue): boolean => {
  switch (name) {
    case 'login': {
      const isLoginValid = validateLogin(value);

      return isLoginValid;
    }
    case 'password':
    case 'oldPassword':
    case 'newPassword':
    case 'repeatedPassword': {
      const isPasswordValid = validatePassword(value);

      return isPasswordValid;
    }
    case 'firstName':
    case 'secondName': {
      const isNameValid = validateName(value);

      return isNameValid;
    }
    case 'email': {
      const isEmailValide = validateEmail(value);

      return isEmailValide;
    }
    case 'phone': {
      const isPhoneValide = validatePhone(value);

      return isPhoneValide;
    }
    default: {
      return true;
    }
  }
};
