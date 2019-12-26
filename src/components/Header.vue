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
            v-if="route.name != 'Expansion'"
            tag="li"
            class="nav-item"
            :to="route.path"
          >
            <a class="nav-link">{{ route.name }}</a>
          </router-link>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Expansions
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <a
                class="dropdown-item"
                href="#/expansion/8/"
              >Base Cards</a>
              <div class="dropdown-divider"></div>
              <a
                v-for="set in set_list"
                v-bind:key="set"
                class="dropdown-item"
                :href="'#/expansion/'+set[1]+'/'"
              >{{set[0]}}</a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#/expansion/0/"
              >Promo Cards</a>
            </div>
          </li>
          
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
  data () {
    return {
      set_list: [ ['Dominion', 1], 
                  ['Intrigue', 2],
                  ['Seaside', 3], 
                  ['Alchemy', 4], 
                  ['Prosperity', 5], 
                  ['Cornucopia', 6], 
                  ['Hinterlands', 7], 
                  ['Dark Ages', 9], 
                  ['Guilds', 10], 
                  ['Adventures', 11], 
                  ['Empires', 12]/*, 'Nocturne', 'Renaissance'*/],
    }
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap";
h2 {
  border-bottom: 1px solid $gray-400;
}
</style>
