import { URLS } from '@shared/constants';
import Block from '@shared/lib/block';
import { PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import styles from '../profile.module.css';
import templateSource from './profile.hbs?raw';

export class Profile extends Block<Record<string, unknown>> {
  static componentName = 'Profile';

  protected template = templateSource;

  constructor() {
    const data = {
      user: USER,
      exitLinkTitle: 'Выйти',
      chatLink: URLS.login,
      profileInputs: PROFILE_INPUTS,
      profileLinks: PROFILE_LINKS,
    };
    super({ ...data, styles });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
