import { HttpTransport } from '@shared/api';
import type { GetChatTokenResponse } from '../types';

export const chatMessagesApiInstance = new HttpTransport();

// export class ChatMessagesApi extends BaseApi<{ id: number }, unknown> {
//   static request({ id }: { id: number }) {
//     return chatMessagesApiInstance.get(`/${id}`);
//   }
// }

export class ChatMessagesApi {
  static getChatToken(chatId: number): Promise<GetChatTokenResponse> {
    return chatMessagesApiInstance.post(
      `/api/v2/chats/token/${chatId}`
    ) as unknown as Promise<GetChatTokenResponse>;
  }
}
