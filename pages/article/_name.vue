<template>
  <div>
    <article v-if="post">
      <img :src="post[0].img" alt="bannière article" class="post-img" />
      <div class="content">
        <h1>{{ post[0].title }}</h1>
        <div v-if="post" v-html="post[0].content"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
  data() {
    return {
      postId: ''
    }
  },
  methods: {
    async fetchPost() {
      const postId = this.$route.params.postId;
      console.log(this.$route)
      this.postId = postId
      const post = await this.$axios.$get(
        `https://blogtestmongodb.herokuapp.com/post/${this.postId}`
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

<style scoped>
.post-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.content {
  margin: 10px;
}
</style>
