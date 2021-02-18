<template>
  <LastArticle v-bind:lastArticle="this.lastArticle"/>
</template>

<script>
export default {
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
    }
  },
  mounted() {
    this.fetchLastArticle();
  }
};
</script>

<style></style>
