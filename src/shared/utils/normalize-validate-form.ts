import { normalizeValue } from './normalize-value';
import { validateValue } from './validate-value';

interface NormalizeValidateForm {
  validatedForm: Record<string, unknown>;
  error: boolean;
}

export const normalizeValidateForm = (form: Record<string, unknown>): NormalizeValidateForm => {
  const validatedForm: Record<string, unknown> = {};
  let error = false;

  for (const key in form) {
    const normalizedValue = normalizeValue({
      value: form[key] as string,
      name: key,
    });

    validatedForm[key] = normalizedValue;

    const isValueValid = validateValue({
      value: form[key] as string,
      name: key,
    });

    if (!isValueValid) {
      error = true;
    }
  }

  return {
    validatedForm,
    error,
  };
};
