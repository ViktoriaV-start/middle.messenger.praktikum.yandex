export const chats = [
  {
    id: 1,
    title: 'Приветственный чат',
    avatarUrl: 'welcome.jpg', // **исправлено: avatar → avatarUrl**
    unreadCount: 2,
    lastMessage: {
      author: 'Бот',
      text: '<b>Добро пожаловать!</b>',
      time: '09:20',
    },
  },
  {
    id: 2,
    title: 'Frontend Crew',
    avatarUrl: 'frontend.jpg', // **исправлено: avatar → avatarUrl**
    unreadCount: 0,
    lastMessage: {
      author: 'Витя',
      text: 'Код ревью в четверг?',
      time: '18:05',
    },
  },
];
