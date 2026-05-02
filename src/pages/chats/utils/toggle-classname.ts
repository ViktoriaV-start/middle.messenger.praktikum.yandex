import type { HandleClassnameProps } from '../types';

export const toggleClassname = ({
  selector,
  classname,
  parent = document,
}: HandleClassnameProps) => {
  const target = parent?.querySelector(selector);

  if (target) {
    target.classList.toggle(classname);
  }
};
