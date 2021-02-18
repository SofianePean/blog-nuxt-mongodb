<template>
  <div>
    <LastArticle v-bind:lastArticle="this.lastArticle" />
    <NewPosts :newPosts="newPosts" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastArticle: null,
      newPosts: []
    };
  },
  methods: {
    async fetchLastArticle() {
      const lastArticle = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/lastarticle"
      );
      this.lastArticle = lastArticle;
    },
    async fetchNewPosts() {
      const newPosts = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/post"
      );
      newPosts.pop()
      this.newPosts = newPosts;
    }
  },
  mounted() {
    this.fetchLastArticle();
    this.fetchNewPosts();
  }
};
</script>

<style></style>
