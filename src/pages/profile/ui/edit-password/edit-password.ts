import Block from '@app/block.ts';
import styles from '../profile.module.css';
import templateSource from './edit-password.hbs?raw';
import { BUTTONS, PASSWORD_INPUTS } from '../../constants';

export class EditPassword extends Block<{}> {
  static componentName = 'EditPassword';

  protected template = templateSource;

  constructor() {
    const data = {
      button: {
        title: BUTTONS.save,
      },
      passwordInputs: PASSWORD_INPUTS,
    };
    super({ ...data, styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
