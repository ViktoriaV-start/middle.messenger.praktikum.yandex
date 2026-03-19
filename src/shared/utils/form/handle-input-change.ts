import { normalizeValue } from '../normalize-value';
import { validateValue } from '../validate-value';

interface InputContext {
  defaultBorder: string;
  errorBorder: string;
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

  target.value = normalizeValue({
    value: inputValue,
    name: inputName,
  });

  if (!isValueValid) {
    console.warn('Некорректное значение');

    target.classList.remove(this.defaultBorder);
    target.classList.add(this.errorBorder);

    return;
  }

  console.log(inputName, inputValue);
}
