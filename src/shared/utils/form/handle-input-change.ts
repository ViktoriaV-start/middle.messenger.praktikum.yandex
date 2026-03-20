import { normalizeValue } from '../normalize-value';
import { validateValue } from '../validate-value';

interface InputContext {
  defaultStyle: string;
  errorStyle: string;
}

export function handleInputChange(this: InputContext, target: HTMLInputElement) {
  const inputValue = target.value.trim();
  const inputName = target.name as 'login' | 'password';

  const normalizedValue = normalizeValue({
    value: inputValue,
    name: inputName,
  });

  const isValueValid = validateValue({
    value: normalizedValue,
    name: inputName,
  });

  target.value = normalizedValue;

  if (!isValueValid) {
    console.warn('Некорректное значение');

    target.classList.remove(this.defaultStyle);
    target.classList.add(this.errorStyle);

    return;
  }
}
