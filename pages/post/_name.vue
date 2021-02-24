<template>
  <div :style="[isMobile ? { 'padding-top': '80px' } : {}]">
    <article v-if="post">
      <img
        :src="post[0].img"
        alt="bannière article"
        class="post-img"
        :style="[isMobile ? { height: '200px' } : { height: '400px' }]"
      />
      <div
        class="content"
        :style="[isMobile ? { padding: '0 10px' } : { padding: '0 250px' }]"
      >
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
      postId: ""
    };
  },
  async asyncData({ params, $http }) {
    const post = await $http.$get(
      `https://blogtestmongodb.herokuapp.com/post/${params.name}`
    );
    // this.$store.commit("post/savePost", post);
    return { post };
  },
  computed: {
    isMobile() {
      return this.$store.state.home.isMobile;
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
  }
};
</script>

<style>
.post-img {
  width: 100%;
  object-fit: cover;
}
.content {
  margin: 10px;
  font-family: "Poppins";
}
.img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
