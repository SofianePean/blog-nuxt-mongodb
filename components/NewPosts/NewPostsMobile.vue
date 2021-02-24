<template>
  <div class="container">
    <article class="lastArticle" v-for="newPost in newPosts" :key="newPost._id">
      <img
        :src="newPost.img"
        alt="image dernier article"
        class="img-lastArticle"
      />
      <NuxtLink
        v-if="newPosts"
        :to="{
          path: `/post/${newPost.slug}`,
          params: { postId: newPost._id }
        }"
      >
        <div
          class="container-text"
          :style="[isMobile ? { width: '100%', left: '0%' } : { width: '50%' }]"
        >
          <div>
            <NuxtLink
              :to="{
                path: `/categoryPosts/${newPost.category[0].name.toLowerCase()}`,
                query: { categoryId: newPost.category[0]._id }
              }"
              class="link-category"
              :style="{ 'background-color': newPost.category[0].color }"
              >{{ newPost.category[0].name }}</NuxtLink
            >
          </div>
          <h2 class="title-lastArticle">{{ newPost.title }}</h2>
          <p class="content-lastArticle">
            {{ newPost.content }}
          </p>
          <div class="info">
            <span class="author">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'user-circle']"
              />{{ newPost.author.username }}
            </span>
            <span class="author">
              <font-awesome-icon class="icon" :icon="['fas', 'eye']" />
              90 lectures
            </span>
            <span class="author">
              <font-awesome-icon class="icon" :icon="['fas', 'clock']" />{{
                newPost.time
              }}
              min de lecture
            </span>
          </div>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$store.state.home.isMobile;
    },
    newPosts() {
      return this.$store.state.home.newPosts;
    }
  }
};
</script>

<style scoped>
.container {
  padding-bottom: 20px;
}
.lastArticle {
  display: flex;
  width: 90%;
  height: 350px;
  position: relative;
  margin: 10px auto;
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
  padding: 30px;
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
  margin-right: 17px;
}
.icon {
  margin-right: 3px;
}
</style>
