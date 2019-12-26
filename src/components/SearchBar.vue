<template>
  <div class="input-group mb-3 container-xl">
    <input
      type="text"
      class="form-control"
      placeholder="Search for a Dominion Card"
      aria-label="Search for a Dominion Card"
      aria-describedby="button-search"
      v-on:input="updateInput($event.target.value)"
      
    >
    <div class="input-group-append">
      
      <button
        class="btn btn-outline-secondary dropdown-toggle bg-dark text-white"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Search {{search_scope}}</button>

      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          href="#"
          v-for="item in search_options"
          v-bind:key="item"
          v-on:click="updateOption(item)"
        >Search {{item}}</a>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: "SearchBar",
  data () {
    return {
      search_scope: "All",
      search_options: ['All', 'Name', 'Text', 'Cost', 'Type'],
      search_value: "",
    }
  },
  methods: {
    updateInput (value) {
      this.search_value=value;
      this.$emit('search-cards', value, this.search_scope);
    },
    updateOption (option) {
      this.search_scope=option;
      this.$emit('search-cards', this.search_value, option);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>