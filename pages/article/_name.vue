<template>
  <h1 v-if="post">{{ post[0].title }}</h1>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
  methods: {
    async fetchPost() {
      const postId = this.$route.params.postId;
      const post = await this.$axios.$get(
        `https://blogtestmongodb.herokuapp.com/post/${postId}`
      );
      this.$store.commit("post/savePost", post);
    }
  },
  head() {
    return {
      title: this.post ? this.post[0].title : "...",
      meta: [
        {
          hid: this.post ? this.post[0]._id : "...",
          name: this.post ? this.post[0].title : "...",
          content: this.post ? this.post[0].content : "..."
        }
      ]
    };
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
    post() {
      return this.$store.state.post.post;
    }
  }
};
</script>

<style scoped></style>
