const mutations = {
  UPDATE_FILTER(state, filter) {
    state.filter = filter;
  },
  UPDATE_THEME(state, color) {
    state.themeColor = color;
  },
  ACCESS_TOKEN(state, token) {
    state.token = token;
  },

  USE_DETAILS(state, payload) {
    state.userDetails = payload;
  }
};
export default mutations;
