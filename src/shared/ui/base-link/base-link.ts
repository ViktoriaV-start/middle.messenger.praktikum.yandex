import templateSource from './base-link.hbs?raw';
import type { BaseLinkProps } from '@shared/types';

import Block from '@app/block.ts';
import baseStyles from './base-link.module.css';

export class BaseLink extends Block<BaseLinkProps> {
  static componentName = 'BaseLink';
  protected template = templateSource;

  constructor(props: BaseLinkProps) {
    const styles = {
      ...baseStyles,
      ...props.styles,
    };

    const classNames = props.styles
      ? `navigation-link ${styles['base-link']} ${props.styles}`
      : `navigation-link ${styles['base-link']}`;

    super({ ...props, styles, classNames });
  }

  public setProps(props: BaseLinkProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
