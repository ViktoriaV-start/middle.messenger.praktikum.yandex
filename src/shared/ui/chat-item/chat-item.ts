import Block from '../../lib/block';
import type { ChatItemProps } from '../../types';
import templateSource from './chat-item.hbs?raw';
import styles from './chat-item.module.css';

export class ChatItem extends Block<ChatItemProps> {
  static componentName = 'ChatItem';

  protected template = templateSource;

  constructor(props: ChatItemProps) {
    const unreadCountClass = props.unreadCount ? styles.unread : '';
    super({ ...props, unreadCountClass, styles });
  }

  public setProps(props: ChatItemProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
