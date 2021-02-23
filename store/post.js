export const state = () => ({
  post: null
});

export const mutations = {
  savePost(state, post) {
    state.post = post;
  },
};
