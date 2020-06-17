import localSession from '@/config/localSession';
const state = {
  filter: 'all',
  todos: [
    {
      id: 1,
      title: 'Finish Vue Screencast',
      completed: false,
      editing: false
    },
    {
      id: 2,
      title: 'Take over world',
      completed: false,
      editing: false
    }
  ],
  themeColor: '#005bcc',
  token: localSession.get('accessToken') || null,
  userDetails: localSession.get('userDetails') || null
};

export default state;
