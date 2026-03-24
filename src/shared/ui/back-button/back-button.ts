import LeftArrowIcon from '../../assets/icons/left-arrow-icon.svg?raw';
import Block from '../../lib/block';
import type { BackButtonProps } from '../../types';
import templateSource from './back-button.hbs?raw';
import styles from './back-button.module.css';

const COMPONENT_NAME = 'BackButton';

export class BackButton extends Block<BackButtonProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor(props: BackButtonProps) {
    super({ ...props, componentName: COMPONENT_NAME, icon: LeftArrowIcon, styles });
  }

  public setProps(props: BackButtonProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
