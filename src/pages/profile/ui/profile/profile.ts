import Block from '@app/block.ts';
import styles from '../profile.module.css';
import templateSource from './profile.hbs?raw';
import { PROFILE_INPUTS, PROFILE_LINKS, USER } from '../../constants';
import { URLS } from '@shared/constants';

export class Profile extends Block<{}> {
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
