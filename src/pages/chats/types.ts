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

export interface HandleClassnameProps {
  selector: string;
  classname: string;
  parent?: Document | Element | null;
}

export interface ConfirmationComponentProps {
  confirmation: {
    text: string;
    hidden: boolean;
  };
}

export interface ConfirmationFormConfigItem {
  text: string;
  searchFormType: string;
  formType: string;
}
