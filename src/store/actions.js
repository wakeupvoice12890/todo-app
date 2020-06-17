const actions = {
  updateFilter({
    commit
  }, filter) {
    setTimeout(() => {
      commit('UPDATE_FILTER', filter)
    }, 100)
  },
  themeChange({
    commit
  }, payload) {
      commit('UPDATE_THEME', payload);
  },
  loggedIn({
    commit
  }, payload) {
      commit('ACCESS_TOKEN', payload);
  },

  userDetails({
    commit
  }, payload) {
      commit('USE_DETAILS', payload);
  },
}

export default actions;
