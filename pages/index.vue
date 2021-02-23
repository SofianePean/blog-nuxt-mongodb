<template>
  <div class="page">
    <LastArticle />
    <h1 class="title">Nouveaux articles</h1>
    <NewPostsMobile v-if="isMobile === true" />
    <NewPosts v-else :newPosts="newPosts" />
  </div>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
  data() {
    return {
    };
  },
  loading: {
    color: "blue",
    height: "15px"
  },
  methods: {
    async fetchLastPost() {
      const lastPost = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/lastarticle"
      );
      console.log(lastPost)
      this.$store.commit("home/saveLastPost", lastPost);
    },
    async fetchNewPosts(context) {
      const newPosts = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/post"
      );
      newPosts.pop();
      this.$store.commit("home/saveNewPosts", newPosts);
    },
    async fetchSomething() {
      const category = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/category"
      );
      this.$store.commit("home/saveCategories", category);
    }
  },
  mounted() {
    this.fetchLastPost();
    this.fetchNewPosts();
    this.fetchSomething();
  },
  computed: {
    newPosts() {
      return this.$store.state.home.newPosts;
    },
    isMobile() {
      return this.$store.state.home.isMobile;
    },
  }
};
</script>

<style>
.page {
  background-color: #f3f3f3;
}
.title {
  margin: 15px auto;
  width: 90%;
}
</style>
