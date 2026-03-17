import templateSource from './chat-item.hbs?raw';
import type { ChatItemProps } from '@shared/types';

import Block from '@app/block.ts';
import styles from './chat-item.module.css';

export class ChatItem extends Block<ChatItemProps> {
  static componentName = 'ChatItem';

  protected template = templateSource;

  constructor(props: ChatItemProps) {
    super({ ...props, styles });
  }

  public setProps(props: ChatItemProps) {
    super.setProps(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
