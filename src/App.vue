<template>
  <div id="app">
    <div class="container-xl">
      <div class="row">
        <Header v-bind:title="this.$route.meta.title" />
      </div>
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
}
</script>

<style>
</style>
