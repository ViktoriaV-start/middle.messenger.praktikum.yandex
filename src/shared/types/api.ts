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

export interface UpdateAvatarResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
}

export interface ChatUsersData {
  id: number;
  offset?: number;
  limit?: number;
  name?: string;
  email?: string;
}
