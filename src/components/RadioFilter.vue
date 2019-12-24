<template>

  <div class="card">
    <div
      class="card-header"
      :id="'heading'+name"
    >
      <h2 class="mb-0">
        <button
          class="btn btn-link collapsed sidebar-h2"
          type="button"
          data-toggle="collapse"
          :data-target="'#collapse'+name"
          aria-expanded="true"
          :aria-controls="'collapse'+name"
        >
          Choose {{name.charAt(0).toUpperCase()+name.slice(1)}}
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
        class="card-body list-group list-group-flush"
        style="padding-right:0; margin-right:0"
      >
        <a
          class="list-group-item list-group-item-action"
          v-bind:class="{ active: ( chosen == 'All' ) }"
          aria-label="Show all Dominion cards."
          v-on:click="removeFilter()"
        >
          All
        </a>
        <a
          class="list-group-item list-group-item-action"
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

<style scoped lang="scss">
.sidebar-h2 {
  text-align: left;
  font-size: 18px;
  color: black;
}
.btn {
  padding: 0;
}
.list-group-item,
.card-header {
  padding: 0.375rem 0.75rem;
}
.card-body {
  padding: 0;
}
</style>