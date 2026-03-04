export interface InfoProps {
  title: string;
  text: string;
  link: string;
  linkTitle: string;
}

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
}

export interface FormControlItem {
  buttonTitle: string;
  linkTitle: string;
  link: string;
}
