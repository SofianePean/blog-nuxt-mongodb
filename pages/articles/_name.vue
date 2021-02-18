<template>
    <div class="container">
        <h1 v-if="posts.length <= 0">Il n'y a pas encore d'articles pour cette section</h1>
        <article v-else>
            <h1>{{posts[0].title}}</h1>
        </article>
    </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async fetchSomething() {
      const postId = this.$route.query.categoryId;
      const posts = await this.$axios.$get(
        `https://blogtestmongodb.herokuapp.com/category/${postId}`
      );
      this.posts = posts;
      if(posts.length <= 0) {
          console.log('Il n a pas encore de post')
      }
      console.log(posts);
    }
  },
  mounted() {
    this.fetchSomething();
  }
};
</script>

<style scoped></style>
