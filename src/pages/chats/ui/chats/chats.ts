import Block from '@shared/lib/block';
import { store } from '@shared/store';
import { ChatsApi } from '../../api';
import templateSource from './chats.hbs?raw';
import styles from './chats.module.css';

const COMPONENT_NAME = 'Chats';

class ChatsController {
  static getChats() {
    ChatsApi.request().then((data) => {
      console.log(data);
      store.setState('chats', data);
    });
  }
}

let isLoaded = false;

export class Chats extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;

  constructor() {
    super({ componentName: COMPONENT_NAME, styles });

    store.subscribe(() => {
      this.setProps(store.getState());
    });
  }

  componentDidMount() {
    if (isLoaded) {
      return;
    }

    isLoaded = true;

    ChatsController.getChats();
  }

  getContent() {
    this.render();

    return this.element();
  }
}
