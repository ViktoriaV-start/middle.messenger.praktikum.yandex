export const PROFILE_INPUTS = {
  email: {
    type: 'email',
    name: 'email',
    placeholder: 'Почта',
    label: 'Почта',
  },
  login: {
    type: 'text',
    name: 'login',
    placeholder: 'Логин',
    label: 'Логин',
  },
  firstName: {
    type: 'text',
    name: 'firstName',
    placeholder: 'Имя',
    label: 'Имя',
  },
  secondName: {
    type: 'text',
    name: 'secondName',
    placeholder: 'Фамилия',
    label: 'Фамилия',
  },
  displayName: {
    type: 'text',
    name: 'displayName',
    placeholder: 'Имя в чате',
    label: 'Имя в чате',
  },
  phone: {
    type: 'text',
    name: 'phone',
    placeholder: 'Телефон',
    label: 'Телефон',
  },
} as const;

export const USER = {
  email: 'li-mail@yandex.ru',
  login: 'lli-yue',
  firstName: 'Юэ',
  secondName: 'Ли',
  displayName: 'Ли Юэ ',
  phone: '89551234567',
};

export const PROFILE_BUTTONS = {
  changeData: 'Изменить данные',
  changePassword: 'Изменить пароль',
} as const;
