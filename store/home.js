export const state = () => ({
  isMobile: null,
  newPosts: [],
  categories: [],
  lastPost : null,
});

export const mutations = {
  changeIsMobileOrNot(state, value) {
    state.isMobile = value;
  },
  saveNewPosts(state, posts) {
    state.newPosts = posts;
  },
  saveCategories(state, categories) {
    state.categories = categories;
  },
  saveLastPost(state, lastPost) {
    state.lastPost = lastPost
  }
};
