<template>
  <div>
    <h1>Nouveaux articles</h1>
    <div class="container">
      <article class="post" v-for="newPost in newPosts" :key="newPost._id">
        <div class="img-container">
          <img
            class="img"
            src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image de l'article"
          />
        </div>
        <div class="content">
          <NuxtLink to="/">NATURE</NuxtLink>
          <h2>Je suis un title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            alias rem provident eius natus magni numquam, laudantium facere,
            expedita iusto laboriosam mollitia vitae explicabo, perspiciatis
            ipsa cumque perferendis esse commodi! Dolorum dolores incidunt
            aperiam cum sit, amet saepe dolorem necessitatibus.
          </p>
          <p>Sofiane Pean</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newPosts"]
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.post {
  display: flex;
  width: 80%;
  height: 250px;
  margin-top: 20px;
}
.img-container {
  max-width: 100%;
}
.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.content {
    padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
</style>
