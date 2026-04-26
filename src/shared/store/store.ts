import { Router } from '../router/router';
import type { Chat, Listener, StoreMessage, StoreState, User } from '../types';
import { merge, set } from '../utils';

class Store {
  private state: StoreState = {
    user: null,
    router: new Router('#app'),
    chats: [],
    activeChat: null,
    chatUsers: [],
    messages: [],
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

  public addMessages(messages: StoreMessage[]) {
    this.state.messages = [...this.state.messages, ...messages];
    this.emit();
  }

  public clearMessages() {
    this.state.messages = [];
  }

  public clearState() {
    this.state = {
      user: null,
      router: new Router('#app'),
      chats: [],
      activeChat: null,
      chatUsers: [],
      messages: [],
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

  public setActiveChat(chat: Chat) {
    this.state.activeChat = { ...chat };
    this.emit();
  }

  public setActiveChatToken(chatToken: string) {
    this.state.activeChatToken = chatToken;
  }

  public setChatUsers(users: User[]) {
    this.state.chatUsers = [...users];
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
