// import Handlebars from 'handlebars';
// import templateSource from './input.hbs?raw';
// import styles from './input.module.css';
// import type { InputProps } from '@shared/types';
//
// const template = Handlebars.compile(templateSource);
//
// export function Input(input: InputProps, isEditable: boolean = false) {
//   const readonly = isEditable ? '' : 'readonly';
//   const editableClass = isEditable ? styles.input__editable : '';
//
//   return template({
//     styles,
//     input,
//     readonly,
//     editableClass,
//   });
// }

import Block from '@app/block.ts';
import styles from './input.module.css';
import templateSource from './input.hbs?raw';
import type { EditableInputProps } from '@shared/types';

export class Input extends Block<EditableInputProps> {
  static componentName = 'Input';

  protected template = templateSource;

  constructor(props: EditableInputProps) {
    const readonly = props.isEditable ? '' : 'readonly';
    const editableClass = props.isEditable ? styles.input__editable : '';
    super({ ...props, readonly, editableClass, styles });
  }

  public setProps(props: EditableInputProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {
    input: (event: Event) => {
      const input = event.target as HTMLInputElement;
      console.log(`[InputAuth:${this.props.name}] input event:`, input.value);
    },
  };
}
