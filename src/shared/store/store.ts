import { Router } from '../router/router';
import type { Chat, Listener, StoreState, User } from '../types';
import { merge, set } from '../utils';

class Store {
  private state: StoreState = {
    router: new Router('#app'),
    chats: [],
  };
  private listeners: Set<Listener> = new Set();

  private emit() {
    this.listeners.forEach((listener) => listener());
  }

  public getState() {
    return this.state;
  }

  public setState(path: string, value: unknown) {
    this.state = merge(this.state, set({}, path, value)) as StoreState;
    this.emit();
  }

  public clearState() {
    this.state = {
      router: new Router('#app'),
      chats: [],
    };
  }

  public setUser(user: User) {
    this.state.user = { ...user };
    this.emit();
  }

  public setChats(chats: Chat[]) {
    this.state.chats = [...chats];
    this.emit();
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);

    // Возвращаем функцию для отписки
    return () => {
      this.listeners.delete(listener);
    };
  }
}

export const store = new Store();
