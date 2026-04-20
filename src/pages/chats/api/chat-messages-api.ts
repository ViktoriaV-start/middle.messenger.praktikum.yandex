import { BaseApi, HttpTransport } from '@shared/api';

export const chatMessagesApiInstance = new HttpTransport();

export class ChatMessagesApi extends BaseApi<{ id: number }, unknown> {
  request({ id }: { id: number }) {
    return chatMessagesApiInstance.get(`/${id}`);
  }
}
