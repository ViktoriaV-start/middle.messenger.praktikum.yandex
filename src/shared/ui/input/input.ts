import Block from '../../lib/block';
import type { EditableInputProps } from '../../types';
import templateSource from './input.hbs?raw';
import styles from './input.module.css';

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
