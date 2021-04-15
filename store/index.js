export const state = () => ({
  token: null,
  user: null
});

export const mutations = {
  setUser(state, { user, token }){
    state.user = user;
    state.token = token;
    this.$axios.setToken(token, 'Bearer');
    if (process.browser){
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    }
  },
  clearState (state) {
    state.user = null;
    state.token = null;
    this.$axios.setToken(null, 'Bearer');
    if (process.browser){
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }
};

export const actions = {
  async login ({ commit }, payload) {
    try {
      const { app_init, token } = await this.$axios.$post('auth/login', payload);

      commit('setUser', {
        user: app_init.user,
        token
      });
    } catch (e) {
      throw e.response.data
    }
  },

  logout ({ commit }) {
    commit('clearState')
  }
};
