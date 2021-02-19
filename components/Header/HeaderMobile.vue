<template>
  <div>
    <div class="container-logo">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/img/feel-good.png" alt="" />
      </NuxtLink>
    </div>
    <div class="container-menu">
      <client-only>
        <Slide right>
          <a id="home" href="#">
            <span>Home</span>
          </a>
        </Slide>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-logo {
  display: flex;
  align-items: center;
}
.logo {
  height: 100px;
  width: 100px;
}
</style>
