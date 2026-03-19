import Block from '../../lib/block';
import type { InputProps } from '../../types';
import { handleInputChange } from '../../utils/form';
import templateSource from './input-auth.hbs?raw';
import styles from './input-auth.module.css';

export class InputAuth extends Block<InputProps> {
  static componentName = 'InputAuth';

  protected template = templateSource;
  public defaultBorder = styles['input-auth__valid'];
  public errorBorder = styles['input-auth__invalid'];

  constructor(props: InputProps) {
    super({ ...props, styles });
  }

  public setProps(props: InputProps) {
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
      target.classList.remove(this.errorBorder);
      target.classList.add(this.defaultBorder);
    },
  };
}
