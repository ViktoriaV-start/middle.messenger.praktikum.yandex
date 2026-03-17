import templateSource from './back-button.hbs?raw';
import styles from './back-button.module.css';

import Block from '@app/block.ts';
import type { BackButtonProps } from '@shared/types';
import LeftArrowIcon from '@app/assets/icons/left-arrow-icon.svg?raw';

export class BackButton extends Block<BackButtonProps> {
  static componentName = 'BackButton';

  protected template = templateSource;

  constructor(props: BackButtonProps) {
    super({ ...props, icon: LeftArrowIcon, styles });
  }

  public setProps(props: BackButtonProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
