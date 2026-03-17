import { convertKeysToSnakeCase } from '../../utils';

export const getFormData = (event: Event): Record<string, unknown> => {
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());

  return convertKeysToSnakeCase(data);
};
