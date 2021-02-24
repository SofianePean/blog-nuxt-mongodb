<template>
  <div class="container">
    <div class="container-logo">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/img/feel-good.png" alt="" />
      </NuxtLink>
    </div>
    <div class="container-section" v-if="categories.length !== 0">
      <NuxtLink
        v-for="category in categories"
        :to="{
          path: `/articles/${category.name.toLowerCase()}`,
          query: { categoryId: category._id }
        }"
        class="list-section"
        :key="category._id"
      >
        {{ category.name }}
      </NuxtLink>
      <NuxtLink to="/" class="list-section">Connexion</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async fetchSomething() {
      const category = await this.$axios.$get(
        "https://blogtestmongodb.herokuapp.com/category"
      );
      this.$store.commit("home/saveCategories", category);
    }
  },
  mounted() {
    this.fetchSomething()
  },
  computed: {
    categories() {
      return this.$store.state.home.categories;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  height: 100px;
}
.container-logo {
  display: flex;
  align-items: center;
}
.logo {
  height: 100px;
  width: 100px;
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
