import { LoginApi } from '@shared/api';
import { SUCCESS, URLS } from '@shared/constants';
import Block from '@shared/lib/block';
import { Router } from '@shared/router/router';
import { store } from '@shared/store';
import type { User } from '@shared/types';
import { isEqual } from '@shared/utils';
import { PROFILE_INPUTS, PROFILE_LINKS } from '../../constants';
import styles from '../profile.module.css';
import templateSource from './profile.hbs?raw';

const COMPONENT_NAME = 'Profile';

export class Profile extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  private router: Router = store.getState().router;

  protected template = templateSource;

  constructor() {
    const user = store.getState().user as User;

    const data = {
      user,
      exitLinkTitle: 'Выйти',
      loginLink: URLS.login,
      profileInputs: PROFILE_INPUTS,
      profileLinks: PROFILE_LINKS,
    };
    super({ ...data, componentName: COMPONENT_NAME, styles });

    store.subscribe(() => {
      const currentUser = store.getState().user as User;
      const wasUserChanged = !isEqual(currentUser, this.props.user);

      if (wasUserChanged) {
        this.setProps({ user: currentUser });
      }
    });
  }

  protected async logout(): Promise<boolean> {
    try {
      const response = await LoginApi.logout();

      if (response === SUCCESS) {
        return true;
      }
    } catch (error) {
      console.warn(error);
    }

    return false;
  }

  protected events = {
    click: (event: Event) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest<HTMLAnchorElement>('.navigation-link');

      if (!linkElement) {
        return;
      }

      const isTypeExit = linkElement.dataset.id === 'exit';

      if (isTypeExit) {
        this.logout().then((result) => {
          if (result) {
            store.clearState();
            this.router.go(URLS.login);
          }
        });
      }
    },
  };

  getContent() {
    this.render();

    return this.element();
  }

  protected componentWillUnmount() {
    super.componentWillUnmount();
  }
}
