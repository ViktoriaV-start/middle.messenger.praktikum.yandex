import { LoginApi } from '../../api';
import { SUCCESS, URLS } from '../../constants';
import Block from '../../lib/block';
import { store } from '../../store';
import { type AuthFormProps, FormType } from '../../types';
import { convertKeysToSnakeCase } from '../../utils';
import { getFormData } from '../../utils/form';
import { normalizeValidateForm } from '../../utils/normalize-validate-form';
import templateSource from './auth-form.hbs?raw';
import styles from './auth-form.module.css';

const COMPONENT_NAME = 'AuthForm';

export class AuthForm extends Block<AuthFormProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private error = false;
  private router = store.getState().router;

  constructor(props: AuthFormProps) {
    super({ ...props, componentName: COMPONENT_NAME, styles, error: false });
  }

  public setProps(props: AuthFormProps) {
    super.setProps(props);
  }

  private gatherDate = (event: Event) => {
    const formData = getFormData(event);

    const form = normalizeValidateForm(formData);

    if (form.error) {
      this.error = true;
      this.setProps({ ...this.props, error: true });
    }

    const data = convertKeysToSnakeCase(form.validatedForm);

    return data;
  };

  private async handleSignin(event: Event): Promise<boolean> {
    const data = this.gatherDate(event);

    try {
      const response = await LoginApi.signin(data);
      store.setState('user', data);

      if (response === SUCCESS) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  private async handleSignup(event: Event): Promise<boolean> {
    const data = this.gatherDate(event);

    try {
      const response = (await LoginApi.signup(data)) as Record<string, string | number>;
      store.setState('user', data);

      if (response && response.id) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  private focusinInput(target: HTMLInputElement) {
    if (target.classList.contains('input-auth')) {
      const label = target.parentElement?.querySelector('.label-auth');
      label?.classList.remove('visually-hidden');
    }
  }

  private focusoutInput(target: HTMLInputElement) {
    if (target.classList.contains('input-auth')) {
      const label = target.parentElement?.querySelector('.label-auth');

      if (target.value.trim() === '') {
        label?.classList.add('visually-hidden');
      }
    }
  }

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();

      const user = store.getState().user;

      if (user) {
        return;
      }

      const target = event.target as HTMLElement;
      const formType = target.getAttribute('data-id');

      if (formType === FormType.Login) {
        this.handleSignin(event).then((result: boolean) => {
          if (result) {
            this.router.go(URLS.chats);
          }
        });
      }

      if (formType === FormType.Registration) {
        this.handleSignup(event).then((result: boolean) => {
          if (result) {
            this.router.go(URLS.login);
          }
        });
      }
    },

    focusin: (event: Event) => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }

      const target = event.target as HTMLInputElement;
      this.focusinInput(target);
    },
    focusout: (event: Event) => {
      if (this.error) {
        this.error = false;
        this.setProps({ ...this.props, error: false });
      }

      const target = event.target as HTMLInputElement;
      this.focusoutInput(target);
    },
  };
}
