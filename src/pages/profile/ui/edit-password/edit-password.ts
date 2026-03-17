import Block from '@app/block.ts';
import styles from '../profile.module.css';
import templateSource from './edit-password.hbs?raw';
import { BUTTONS, PASSWORD_INPUTS } from '../../constants';
import { getFormData } from '@shared/utils/form/getFormData.ts';

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

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
      const formData = getFormData(event);

      console.log(formData);
    },
  };
}
