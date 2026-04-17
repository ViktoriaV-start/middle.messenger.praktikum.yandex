export interface Message {
  author: string;
  text: string;
  time: string;
}

export interface ChatItem {
  id: number;
  title: string;
  avatarUrl: string;
  unreadCount: number;
  lastMessage: Message;
}
