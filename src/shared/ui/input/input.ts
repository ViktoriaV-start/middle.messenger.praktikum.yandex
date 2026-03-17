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
}
