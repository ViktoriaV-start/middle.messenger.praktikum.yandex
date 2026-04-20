import type { HandleClassnameProps } from '../types';

export const addClassname = ({ selector, classname, parent = document }: HandleClassnameProps) => {
  const target = parent?.querySelector(selector);

  if (target) {
    target.classList.add(classname);
  }
};
