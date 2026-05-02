import Block from '../../lib/block';
import type { EditableInputProps } from '../../types';
import { handleInputChange } from '../../utils/form';
import templateSource from './input.hbs?raw';
import styles from './input.module.css';

const COMPONENT_NAME = 'Input';

export class Input extends Block<EditableInputProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  public defaultStyle = styles['input-editable__valid'];
  public errorStyle = styles['input-editable__invalid'];

  constructor(props: EditableInputProps) {
    const readonly = props.isEditable ? '' : 'readonly';
    const editableClass = props.isEditable ? styles.input__editable : '';
    super({ ...props, componentName: COMPONENT_NAME, readonly, editableClass, styles });
  }

  public setProps(props: EditableInputProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {
    blur: (event: Event) => {
      const target = event.target as HTMLInputElement;

      handleInputChange.call(this, target);
    },
    focusin: (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.classList.remove(this.errorStyle);
      target.classList.add(this.defaultStyle);
    },
  };
}
