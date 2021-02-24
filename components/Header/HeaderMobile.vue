<template>
  <div>
    <div class="container-logo">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/img/feel-good.png" alt="logo site" />
      </NuxtLink>
    </div>
    <div class="container-menu">
      <client-only>
        <Slide right :closeOnNavigation="true" width="300">
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
          <NuxtLink to="/" class="list-section">Connexion</NuxtLink>
        </Slide>
      </client-only>
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
    this.fetchSomething();
  },
  computed: {
    categories() {
      return this.$store.state.home.categories;
    }
  }
};
</script>

<style>
.container-logo {
  display: flex;
  align-items: center;
}
.logo {
  height: 80px;
  width: 80px;
}
.bm-burger-button {
  top: 30px;
}

.list-section {
  /* display: flex; */
  list-style-type: none;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 10px 0 10px;
  color: inherit;
  font-family: "Poppins";
}
</style>
