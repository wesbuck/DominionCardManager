<template>

  <div class="card">
    <div
      class="card-header pt-0 px-3 bg-dark"
      :id="'heading'+name"
    >
      <h2 class="mb-0">
        <button
          class="btn btn-link collapsed sidebar-h2 p-0"
          type="button"
          data-toggle="collapse"
          :data-target="'#collapse'+name"
          aria-expanded="true"
          :aria-controls="'collapse'+name"
        >
          <span class="choose-lg">Choose {{name.charAt(0).toUpperCase()+name.slice(1)}}</span>
          <span class="choose-sm">{{name.charAt(0).toUpperCase()+name.slice(1)}}</span>
        </button>
      </h2>
    </div>

    <div
      :id="'collapse'+name"
      class="collapse"
      :aria-labelledby="'heading'+name"
      data-parent="#filterSidebar"
    >

      <div
        class="card-body list-group list-group-flush p-0"
      >
        <a
          class="list-group-item list-group-item-action top-item px-3 py-1"
          v-bind:class="{ active: ( chosen == 'All' ) }"
          aria-label="Show all Dominion cards."
          v-on:click="removeFilter()"
        >
          All
        </a>
        <a
          class="list-group-item list-group-item-action px-3 py-1"
          v-bind:class="{ active: ( filter == chosen ) }"
          :aria-label="'Display Dominion cards of this '+filter+'.'"
          v-for="filter in filters"
          v-bind:key="filter"
          v-on:click="applyFilter(filter)"
        >
          {{ filter }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioFilter",
  props: {
    filters: Array,
    name: String,
  },
  data () {
    return {
      chosen: "All",
    }
  },
  methods: {
    applyFilter (value) {
      this.chosen = value;
      this.$emit('update-filter', value);
    },
    removeFilter () {
      this.chosen = "All";
      this.$emit('remove-filter')
    },
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap";
.sidebar-h2 {
  color: white;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: $gray-500;
    text-decoration: none;
  }
}

.active {
  background-color: $gray-400 !important;
  border-color: $gray-400 !important;
  color: $gray-900 !important;
}

.choose-lg {
  display: block;
}
.choose-sm {
  display: none;
}
@media(max-width: 1068px) {
  .choose-lg {
    display: none;
  }
  .choose-sm {
    display: block;
  }
}
</style>