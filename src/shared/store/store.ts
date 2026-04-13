import { Router } from '../router/router';
import type { Listener, State, User } from '../types';
import { merge, set } from '../utils';

class Store {
  private state: State = {
    router: new Router('#app'),
  };
  private listeners: Set<Listener> = new Set();

  private emit() {
    this.listeners.forEach((listener) => listener());
  }

  public getState() {
    return this.state;
  }

  public setState(path: string, value: unknown) {
    this.state = merge(this.state, set({}, path, value)) as State;
    this.emit();
  }

  public clearState() {
    this.state = {
      router: new Router('#app'),
    };
  }

  public setUser(user: User) {
    this.state.user = { ...user };
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
