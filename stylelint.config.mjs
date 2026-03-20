/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(?:[-_]{1,2}[a-z0-9]+)*$',
      {
        message:
          'Используйте только строчные буквы, цифры, дефис (-), одинарное (_) или двойное (__) подчеркивание',
      },
    ],
  },
};
