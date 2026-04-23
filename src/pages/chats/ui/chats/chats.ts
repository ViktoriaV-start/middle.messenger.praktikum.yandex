import Block from '@shared/lib/block';
import { ChatsController } from '../../api';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';

const COMPONENT_NAME = 'Chats';

export class Chats extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ componentName: COMPONENT_NAME, styles });
  }

  componentDidMount() {
    this.initChats();
  }

  private async initChats() {
    await ChatsController.getChats();
  }

  getContent() {
    this.render();

    return this.element();
  }
}
