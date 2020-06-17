const getters = {
  remaining(state) {
    return state.todos.filter(todo => !todo.completed).length;
  },
  anyRemaining(state, getters) {
    return getters.remaining != 0;
  },
  todosFiltered(state) {
    if (state.filter == 'all') {
      return state.todos;
    } else if (state.filter == 'active') {
      return state.todos.filter(todo => !todo.completed);
    } else if (state.filter == 'completed') {
      return state.todos.filter(todo => todo.completed);
    }
    return state.todos;
  },
  themeColor: state => state.themeColor,
  token: state => state.token,
  userDetails: state => state.userDetails,
  isAuthenticated(state) {
    return state.token !== null;
  }
};
export default getters;
