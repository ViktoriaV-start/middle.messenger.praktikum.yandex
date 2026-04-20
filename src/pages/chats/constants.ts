/**
 * Конфиг для форм в компоненте ChatMessages
 */
export const CONFIRMATION_FORM_CONFIG = {
  adding: {
    text: 'Добавить пользователя',
    searchFormType: 'add-user-search',
    formType: 'add-user',
  },
  deleting: {
    text: 'Удалить пользователя',
    searchFormType: 'delete-user-search',
    formType: 'delete-user',
  },
} as const;
