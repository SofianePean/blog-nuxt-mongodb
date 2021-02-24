<template>
  <div class="page">
    <div class="container">
      <article class="post" v-for="newPost in newPosts" :key="newPost._id">
        <div class="img-container">
          <NuxtLink
            v-if="newPosts"
            :to="{
              path: `/post/${newPost.slug}`,
              params: { postId: newPost._id }
            }"
          >
            <img class="img" :src="newPost.img" alt="image de l'article" />
          </NuxtLink>
        </div>
        <div class="content">
          <div>
            <NuxtLink
              :to="{
                path: `/categoryPosts/${newPost.category[0].name.toLowerCase()}`,
                query: { categoryId: newPost.category[0]._id }
              }"
              class="nuxtlink"
              :style="{ 'background-color': newPost.category[0].color }"
              >{{ newPost.category[0].name.toUpperCase() }}</NuxtLink
            >
          </div>
          <h2>{{ newPost.title }}</h2>
          <p class="text">
            {{ newPost.content }}
          </p>
          <div class="info">
            <div class="info">
              <span class="author">
                <font-awesome-icon
                  class="icon"
                  :icon="['fas', 'user-circle']"
                />{{ newPost.author.username }}
              </span>
              <span class="author">
                <font-awesome-icon class="icon" :icon="['fas', 'eye']" />
                100 lectures
              </span>
              <span class="author">
                <font-awesome-icon class="icon" :icon="['fas', 'clock']" />{{
                  newPost.time
                }}
                min de lecture
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    parseDate(date) {
      let postDate = new Date(date);
      const dd = String(postDate.getDate()).padStart(2, "0");
      const mm = String(postDate.getMonth() + 1).padStart(2, "0");
      const yyyy = postDate.getFullYear();
      postDate = dd + "/" + mm + "/" + yyyy;
      return postDate;
    }
  },
  computed: {
    newPosts() {
      return this.$store.state.home.newPosts;
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
  padding-bottom: 20px;
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
  flex-wrap: wrap;
  color: #818181;
  font-size: 0.8rem;
}
.author {
  margin-right: 10px;
}
.icon {
  margin-right: 3px;
}
</style>
