<template>
  <div class="page">
    <LastArticle v-bind:lastArticle="this.lastArticle" />
    <h1 class="title">Nouveaux articles</h1>
    <NewPostsMobile v-if="isMobile === true" />
    <NewPosts v-else :newPosts="newPosts" />
  </div>
</template>

<script>
export default {
  layout(context) {
    const isMobile = context.isMobile;
    if (isMobile) {
      return "mobile";
    } else {
      return "default";
    }
  },
  data() {
    return {
      lastArticle: null
    };
  },
  methods: {
    async fetchLastArticle() {
      const lastArticle = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/lastarticle"
      );
      this.lastArticle = lastArticle;
    },
    async fetchNewPosts(context) {
      const newPosts = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/post"
      );
      newPosts.pop();
      this.$store.commit("home/saveNewPosts", newPosts);
      // this.newPosts = newPosts;
    }
  },
  mounted() {
    this.fetchLastArticle();
    this.fetchNewPosts();
  },
  computed: {
    newPosts() {
      return this.$store.state.home.newPosts;
    },
    isMobile() {
      return this.$store.state.home.isMobile;
    }
  }
};
</script>

<style>
.page {
  background-color: #f3f3f3;
}
</style>
