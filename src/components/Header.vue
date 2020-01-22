<template>
  <div class="w-100 mb-2">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <a
        class="navbar-brand"
        href="#/"
      >Dominion Card Manager</a>

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

          <li
            v-for="name in this.main_links"
            v-bind:key="name"
            class="nav-item"
          >
            <a
              class="nav-link"
              :href="'#/'+name.replace(' ','')+'/'"
            >{{ name }}</a>
          </li>

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
                href="#/expansion/Base Cards/"
              >Base Cards</a>
              <div class="dropdown-divider"></div>
              <a
                v-for="set in set_list"
                v-bind:key="set"
                class="dropdown-item"
                :href="'#/expansion/'+set+'/'"
              >{{set}}</a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#/expansion/Promo/"
              >Promo Cards</a>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#/CustomSet/"
            >
              Custom Set
              <span
                v-if="numCards"
                class="badge badge-success"
              >
                {{ numCards }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <h2
      class="p-2 px-2"
      v-if="title == 'Expansion'"
    >Expansion: {{ this.$route.params.expansionId }}</h2>
    <h2
      class="p-2 px-2"
      v-else-if="title != 'Home'"
    >{{ title }}</h2>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  props: { title: String },
  computed: mapGetters(["numCards"]),
  data () {
    return {
      main_links: ['List',
        'Search',
        'Card Set',
        'Random'],
      set_list: ['Dominion',
        'Intrigue',
        'Seaside',
        'Alchemy',
        'Prosperity',
        'Cornucopia',
        'Hinterlands',
        'Dark Ages',
        'Guilds',
        'Adventures',
        'Empires',
        'Nocturne',
        'Renaissance'],
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
