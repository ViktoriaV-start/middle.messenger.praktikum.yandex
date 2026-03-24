import Block from '../../lib/block';
import type { ChatItemProps } from '../../types';
import templateSource from './chat-item.hbs?raw';
import styles from './chat-item.module.css';

const COMPONENT_NAME = 'ChatItem';

export class ChatItem extends Block<ChatItemProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor(props: ChatItemProps) {
    const unreadCountClass = props.unreadCount ? styles.unread : '';
    super({ ...props, componentName: COMPONENT_NAME, unreadCountClass, styles });
  }

  public setProps(props: ChatItemProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
