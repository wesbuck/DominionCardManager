<template>
  <div class="w-100 mb-2">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Dominion Card Manager</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <router-link
            v-for="route in this.$router.options.routes"
            v-bind:key="route.name"
            tag="li"
            class="nav-item"
            :to="route.path"
          >
            <a class="nav-link">{{ route.name }}</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <h2
      class="p-2 px-2"
      v-if="title != 'Home'"
    >{{ title }}</h2>

  </div>
</template>

<script>
export default {
  name: "Header",
  props: { title: String },
};
</script>

<style lang="scss" scoped>
@import "bootstrap";
h2 {
  border-bottom: 1px solid $gray-400;
}
</style>
