export const REGISTRATION_FORM = {
  email: {
    type: 'text',
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
  phone: {
    type: 'text',
    name: 'phone',
    placeholder: 'Телефон',
    label: 'Телефон',
  },
  password: {
    type: 'text',
    name: 'password',
    placeholder: 'Пароль',
    label: 'Пароль',
  },
  repeatPassword: {
    type: 'text',
    name: 'password',
    placeholder: 'Пароль (еще раз)',
    label: 'Пароль (еще раз)',
  },
} as const;
