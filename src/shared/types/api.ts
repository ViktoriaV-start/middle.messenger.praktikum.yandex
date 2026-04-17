export interface EditPasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface newChatData {
  title: string;
}

export interface ApiError {
  status: number;
  statusText: string;
  response: string;
  request: XMLHttpRequest;
}

export interface ChatUserData {
  users: number[];
  chatId: number;
}

export interface ErrorResponse {
  reason: string;
}
