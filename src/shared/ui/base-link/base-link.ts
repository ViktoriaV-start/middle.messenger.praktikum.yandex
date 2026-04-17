import Block from '../../lib/block';
import type { BaseLinkProps } from '../../types';
import templateSource from './base-link.hbs?raw';
import styles from './base-link.module.css';

export class BaseLink extends Block<BaseLinkProps> {
  static componentName = 'BaseLink';
  protected template = templateSource;

  constructor(props: BaseLinkProps) {
    const color =
      props.color && props.color === 'red' ? styles['base-link_red'] : styles['base-link_primary'];

    const additionalStyles = `${color} ${props.additionalStyles}`;

    super({ ...props, styles, additionalStyles });
  }

  public setProps(props: BaseLinkProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
