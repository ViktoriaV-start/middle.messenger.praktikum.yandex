import { URLS } from '@shared/constants';
import { store } from '@shared/store';
import type { ApiError, StoreMessage } from '@shared/types';
import { convertKeysToCamelCase } from '@shared/utils';
import type { GetChatTokenResponse, SetSocketConnectionProps } from '../types';
import { ChatMessagesApi } from './chat-messages-api';

export class SocketController {
  public socket: WebSocket | null = null;
  public currentChatId: number | null = null;
  public currentToken: string | null = null;
  private pingInterval: number | null = null;
  private userId: number | null = null;

  public async getToken(chatId: number): Promise<string | null> {
    try {
      const response = (await ChatMessagesApi.getChatToken(
        chatId
      )) as unknown as GetChatTokenResponse;

      if (response) {
        store.setActiveChatToken(response.token);

        return response.token;
      }
    } catch (error) {
      if ((error as ApiError).status >= 500) {
        store.getState().router.go(URLS.serverError);
      }
    }

    return null;
  }

  private closeSocket(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.socket) {
        resolve();

        return;
      }

      const socketToClose = this.socket;

      socketToClose.addEventListener(
        'close',
        () => {
          resolve();
        },
        { once: true }
      );

      socketToClose.close();
    });
  }

  private setNewSocket() {
    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${this.userId}/${this.currentChatId}/${this.currentToken}`
    );

    this.handleSocketListeners(this.socket);
  }

  public async setSocketConnection({ userId, chatId }: SetSocketConnectionProps) {
    if (this.currentChatId === chatId && this.socket) {
      return;
    }

    this.currentToken = await this.getToken(chatId);
    this.currentChatId = chatId;
    this.userId = userId;

    // Первый вход - сокета не было
    if (!this.socket && this.currentToken) {
      this.setNewSocket();

      return;
    }

    // Чат переключен - нужен новый сокет

    await this.closeSocket();
    this.removeSocketListeners();

    this.setNewSocket();
  }

  private handleSocketOpen = async () => {
    console.log('Соединение установлено');

    if (this.socket) {
      // this.socket.send(
      //   JSON.stringify({
      //     content: 'Моё первое сообщение миру!',
      //     type: 'message',
      //   })
      // );

      this.startPing();
    }

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(
        JSON.stringify({
          content: '0',
          type: 'get old',
        })
      );
    }
  };

  public sendMessage(content: string): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.warn('WebSocket не открыт, сообщение не отправлено');

      return;
    }

    const message = JSON.stringify({
      content: content,
      type: 'message',
    });

    this.socket.send(message);
  }

  private handleSocketClose = (event: CloseEvent) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    this.stopPing();
    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  };

  private handleSocketMessage = (event: MessageEvent) => {
    let parsedData = null;

    if ('data' in event) {
      parsedData = JSON.parse(event.data);
    } else {
      parsedData = JSON.parse(event);
    }

    if (Array.isArray(parsedData)) {
      const data = parsedData.map((message: Record<string, unknown>) => {
        return convertKeysToCamelCase(message);
      });

      store.addMessages([...(data.reverse() as unknown as StoreMessage[])]);
    } else {
      if ('content' in parsedData && 'type' in parsedData && parsedData.type === 'message') {
        console.log(parsedData);
        const parsedDTO = convertKeysToCamelCase(parsedData) as unknown as StoreMessage;
        store.addMessages([parsedDTO]);
      }
    }
  };

  private handleSocketError = (event: Event) => {
    console.log('Ошибка', event);
  };

  startPing() {
    this.pingInterval = setInterval(() => {
      if (this.socket?.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify({ type: 'ping' }));
      }
    }, 30000);
  }

  stopPing() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  private removeSocketListeners() {
    if (this.socket) {
      this.socket.removeEventListener('open', this.handleSocketOpen);
      this.socket.removeEventListener('close', this.handleSocketClose);

      this.socket.removeEventListener('message', this.handleSocketMessage);
      this.socket.removeEventListener('error', this.handleSocketError);
    }
  }

  public async handleSocketListeners(socket: WebSocket) {
    socket.addEventListener('open', this.handleSocketOpen);
    socket.addEventListener('close', this.handleSocketClose);
    socket.addEventListener('message', this.handleSocketMessage);
    socket.addEventListener('error', this.handleSocketError);
  }
}

export const socketController = new SocketController();
