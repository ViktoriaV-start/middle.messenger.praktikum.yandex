import Block from '../../lib/block';
import type { BaseLinkProps } from '../../types';
import templateSource from './base-link.hbs?raw';
import styles from './base-link.module.css';

const COMPONENT_NAME = 'BaseLink';

export class BaseLink extends Block<BaseLinkProps> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor(props: BaseLinkProps) {
    const type = props.type && props.type === 'exit' ? 'exit' : null;
    const color =
      props.color && props.color === 'red' ? styles['base-link_red'] : styles['base-link_primary'];

    const additionalStyles = `${color} ${props.additionalStyles}`;

    super({ ...props, componentName: COMPONENT_NAME, styles, additionalStyles, type });
  }

  public setProps(props: BaseLinkProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
