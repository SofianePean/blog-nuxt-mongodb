<template>
  <NuxtLink
    v-if="lastPost"
    :to="{
      name: `article-name`,
      params: { postId: lastPost._id },
    }"
  >
    <article class="lastArticle" v-if="lastPost">
      <img
        :src="lastPost.img"
        alt="image dernier article"
        class="img-lastArticle"
      />
      <div
        class="container-text"
        :style="[isMobile ? { width: '100%', left: '0%' } : { width: '50%' }]"
      >
        <div>
          <NuxtLink
            to="/"
            class="link-category"
            :style="{ 'background-color': lastPost.category[0].color }"
            >{{ lastPost.category[0].name }}</NuxtLink
          >
        </div>
        <h2 class="title-lastArticle">{{ lastPost.title }}</h2>
        <p class="content-lastArticle">
          {{ lastPost.content }}
        </p>
        <div class="info">
          <span class="author">{{ lastPost.author.username }}</span>
          <span class="author">{{ lastPost.time }} mins</span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script>
export default {
  // props: ["lastPost"],
  computed: {
    isMobile() {
      return this.$store.state.home.isMobile;
    },
    lastPost() {
      return this.$store.state.home.lastPost;
    }
  }
};
</script>

<style scoped>
.lastArticle {
  display: flex;
  width: 100%;
  height: 400px;
  position: relative;
  margin: 0 auto;
}
.img-lastArticle {
  width: 100%;
  object-fit: cover;
  filter: blur(1.46px) brightness(0.4) opacity(0.7);
  transition: all 0.5s ease-in-out;
}
.img-lastArticle:hover {
  filter: none;
}
.container-text {
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 13%;
  height: 100%;
  width: 50%;
  font-family: "Poppins";
}
.link-category {
  display: inline-block;
  width: auto;
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
}

.content-lastArticle {
  color: white;
  font-weight: bold;
}
.title-lastArticle {
  color: white;
}
.author {
  color: white;
}
</style>
