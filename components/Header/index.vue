<template>
  <div class="container">
    <div class="container-logo">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/img/feel-good.png" alt="" />
      </NuxtLink>
    </div>
    <div class="container-section" v-if="this.categories.length !== 0">
      <NuxtLink
        :to="{
          path: `/articles/${category.name.toLowerCase()}`,
          query: { categoryId: category._id }
        }"
        class="list-section"
        v-for="category in categories"
        :key="category._id"
      >
        {{ category.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  methods: {
    async fetchSomething() {
      const category = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/category"
      );
      this.categories = category;
    }
  },
  mounted() {
    this.fetchSomething();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  height: 140px;
}
.container-logo {
  display: flex;
  align-items: center;
}
.logo {
  height: 120px;
  width: 120px;
}
.container-section {
  display: flex;
  align-items: center;
}
.list-section {
  display: flex;
  list-style-type: none;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 10px 0 10px;
  color: inherit;
}
.nuxt-link-active {
  color: red;
}
</style>
