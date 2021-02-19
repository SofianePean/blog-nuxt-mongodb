<template>
  <div class="page">
    <div class="container">
      <article class="post" v-for="newPost in newPosts" :key="newPost._id">
        <div class="img-container">
          <img class="img" :src="newPost.img" alt="image de l'article" />
        </div>
        <div class="content">
          <div>
            <NuxtLink
              to="/"
              class="nuxtlink"
              :style="{ 'background-color': newPost.category[0].color }"
              >{{ newPost.category[0].name.toUpperCase() }}</NuxtLink
            >
          </div>
          <h2>Je suis un title</h2>
          <p class="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            alias rem provident eius natus magni numquam, laudantium facere,
            expedita iusto laboriosam mollitia vitae explicabo, perspiciatis
            ipsa cumque perferendis esse commodi! Dolorum dolores incidunt
            aperiam cum sit, amet saepe dolorem necessitatibus.
          </p>
          <div class="info">
            <p class="date">{{ parseDate(newPost.date) }}</p>
            <p class="author">{{ newPost.author.username }}</p>
            <p class="counter-view">5 views</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newPosts"],
  methods: {
    parseDate(date) {
      let postDate = new Date(date);
      const dd = String(postDate.getDate()).padStart(2, "0");
      const mm = String(postDate.getMonth() + 1).padStart(2, "0");
      const yyyy = postDate.getFullYear();
      postDate = dd + "/" + mm + "/" + yyyy;
      return postDate;
    }
  }
};
</script>

<style scoped>
.page {
  background-color: #f3f3f3;
}
.container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.post {
  display: flex;
  width: 70%;
  height: 270px;
  margin-top: 20px;
  box-shadow: 0px 1px 10px -10px rgba(0, 0, 0, 1);
  background-color: #ffffff;
}
.img-container {
  width: 100%;
}
.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}
.img:hover {
  filter: blur(1.46px) brightness(0.6) opacity(0.7);
}
.content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 250px;
  width: 100%;
}
.text {
  height: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 6px;
}
.title {
  font-size: 1.5rem;
  width: 70%;
  margin: auto;
  padding: 10px 0;
}
.nuxtlink {
  display: inline-block;
  width: auto;
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
}
.nuxtlink:hover {
  background-color: black !important;
  color: white;
}
.info {
  display: flex;
  color: #818181;
  font-size: 0.8rem;
}
</style>
