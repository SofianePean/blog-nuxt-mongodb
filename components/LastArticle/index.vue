<template>
  <article class="lastArticle" v-if="lastArticle">
    <img
      :src="lastArticle.img"
      alt="image dernier article"
      class="img-lastArticle"
    />
    <div class="container-text">
      <NuxtLink
        to="/"
        class="link-category"
        :style="{ 'background-color': lastArticle.category[0].color }"
        >{{ lastArticle.category[0].name }}</NuxtLink
      >
      <h1>{{ lastArticle.title }}</h1>
    </div>
  </article>
</template>

<script>
export default {
  props: ["lastArticle"]
};
</script>

<style scoped>
.lastArticle {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
}
.img-lastArticle {
  width: 80%;
  object-fit: cover;
  height: 400px;
}
.container-text {
  background-color: tomato;
  position: absolute;
  left: 200px;
}
.link-category {
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  /* color: white; */
  font-size: 1.2rem;
}
</style>
