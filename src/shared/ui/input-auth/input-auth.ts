import Block from '@app/block.ts';
import styles from './input-auth.module.css';
import templateSource from './input-auth.hbs?raw';
import type { InputProps } from '@shared/types';

export class InputAuth extends Block<InputProps> {
  static componentName = 'InputAuth';

  protected template = templateSource;

  constructor(props: InputProps) {
    super({ ...props, styles });
  }

  public setProps(props: InputProps) {
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
