<template>
  <div class="w-100">
    <div class="container-xl row">
      <div class="col-4">
        <img src="../assets/logo.jpg" class="img-fluid" />
      </div>
      <div class="col-8">
        <p class="intro">Welcome to Dominion Card Manager. Please select an option above.</p>
      </div>
    </div>
    <p class="footer">
      This project is on <a
        href="https://wesbuck.github.io/DominionCardAPI/"
        rel="external"
        target="_blank"
      >GitHub</a>.
      Data provided by <a
        href="https://wesbuck.github.io/DominionCardAPI/"
        rel="external"
        target="_blank"
      >DominionCardAPI</a>.</p>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
@import "bootstrap";
img {
  max-width: 400px;
}
.intro {
  padding-top: 40px;
}
.footer {
  border-top: 1px solid $gray-800;
  font-size: 85%;
  color: $gray-800;
  font-style: italic;
  text-align: right;
}
</style>