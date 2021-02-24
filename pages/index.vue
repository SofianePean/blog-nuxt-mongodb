<template>
  <div class="page" :style="[isMobile ? { 'padding-top': '80px' } : {}]">
    <LastArticle />
    <h1
      class="title"
      :style="[
        isMobile
          ? { margin: '15px auto', width: '90%' }
          : { margin: '15px auto', width: '70%' }
      ]"
    >
      Nouveaux articles
    </h1>
    <NewPostsMobile v-if="isMobile === true" />
    <NewPosts v-else :newPosts="newPosts" />
  </div>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
  data() {
    return {};
  },
  async asyncData({ $http, store }) {
    const lastPost = await $http.$get(
      `https://blogtestmongodb.herokuapp.com/lastarticle`
    );
    const newPosts = await $http.$get(
      `https://blogtestmongodb.herokuapp.com/post`
    );
    store.commit("home/saveLastPost", lastPost);
    newPosts.pop();
    store.commit("home/saveNewPosts", newPosts);
    // return { lastPost };
  },
  methods: {},
  mounted() {},
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
.title {
  font-family: "Poppins";
}
</style>
