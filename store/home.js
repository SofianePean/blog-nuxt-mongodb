export const state = () => ({
  isMobile: null,
  newPosts: []
});

export const mutations = {
  changeIsMobileOrNot(state, value) {
    state.isMobile = value
  },
  saveNewPosts(state, posts) {
      state.newPosts = posts
  }
};
