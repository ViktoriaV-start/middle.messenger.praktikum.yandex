import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { ChatItemProps } from '@shared/types';
import templateSource from './chat-item.hbs?raw';
import styles from './chat-item.module.css';

const COMPONENT_NAME = 'ChatItem';

export class ChatItem extends Block<ChatItemProps> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;
  private unsubscribe: () => void;

  constructor(props: ChatItemProps) {
    const unreadCountClass = props.unreadCount ? styles.unread : '';
    super({ ...props, componentName: COMPONENT_NAME, unreadCountClass, styles });
  }

  public setProps(props: Partial<ChatItemProps>) {
    super.setProps(props);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(async () => {
      const chatId = store.getState().activeChat?.id;

      if (chatId && chatId === this.props.id) {
        this.setProps({
          unreadCount: 0,
          unreadCountClass: '',
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
