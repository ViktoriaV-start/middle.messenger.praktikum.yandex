import Block from '@shared/lib/block';
import { ChatsController } from '../../api';
import type { MessageProps } from '../../types';
import templateSource from './message-in.hbs?raw';
import styles from './message-in.module.css';

const COMPONENT_NAME = 'MessageIn';

export class MessageIn extends Block<MessageProps> {
  static componentName = COMPONENT_NAME;
  protected fileUrl: string | null = null;

  protected template = templateSource;

  constructor(props: MessageProps) {
    const userName = ChatsController.getUserNameById(+props.message.userId);
    super({
      ...props,
      userName,
      content: null,
      isFile: null,
      src: null,
      componentName: COMPONENT_NAME,
      styles,
    });

    this.init();
  }

  private async init(): Promise<void> {
    const message = this.props.message;
    const { type } = message;

    let content: string | File | null = null;

    if (type === 'message') {
      content = message.content;
      this.setProps({ content, isFile: false });
    } else if (type === 'file' && message.file) {
      const file = (await ChatsController.getFile(message.file.path)) as Blob;

      this.fileUrl = URL.createObjectURL(file);
      const src = this.fileUrl;

      this.setProps({ isFile: true, src });
    }
  }

  public setProps(props: Record<string, unknown>) {
    super.setProps({ ...props });
  }
}
