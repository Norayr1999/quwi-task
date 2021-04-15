export const state = () => ({
  projects: []
});

export const mutations = {
  setProjects (state, payload) {
    state.projects = payload
  }
};

export const actions = {
  async getProjects ({ commit }, payload) {
    try {
      const { projects } = await this.$axios.$get('projects-manage');
      commit('setProjects', projects);
    } catch (e) {
      throw e.response.data
    }
  },

  async getProject ({ commit }, id) {
    try {
      const { project } = await this.$axios.$get(`projects-manage/${id}`);
      return project
    } catch (e) {
      console.log('eeee', e);
      throw e.response.data
    }
  },

  async updateProject ({ commit }, payload) {
    try {
      await this.$axios.$post('projects-manage/update',  {
        name: payload.name
      }, {
        params: {
          id: payload.id
        }
      });
    } catch (e) {
      throw e.response.data
    }
  }
};
