<template>
  <div class="input-group">

    <div
      class="input-group-prepend"
      v-for="filter in filters"
      v-bind:key="filter"
    >
      <div class="input-group-text">
        <input
          type="radio"
          :aria-label="'Display Dominion cards in the '+filter+' set.'"
          :name="name"
          :id="'radio-' + filter"
          :value="'radio-' + filter"
          v-model="chosen"
          v-on:click="applyFilter(filter, $event)"
        >
        <label
          class="col-form-label"
          :for="'radio-' + filter"
        >
          {{ filter }}
        </label>
      </div>
    </div>

    <div class="input-group-prepend">
      <div class="input-group-text">
        <input
          type="radio"
          aria-label="Show all Dominion cards."
          :name="name"
          id="radio-all"
          value="radio-all"
          v-model="chosen"
          v-on:click="removeFilter($event)"
        >
        <label
          class="col-form-label"
          for="radio-all"
        >
          All
        </label>
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
  data() {
    return {
      chosen: "radio-all",
    }
  },
  methods: {
    applyFilter: function (value, event) {
      if (event.target.checked)
        this.$emit('update-filter', value)
    },
    removeFilter: function (event) {
      if (event.target.checked)
        this.$emit('remove-filter',)
    },
  },
};
</script>

<style scoped>
.col-form-label {
  margin-left: 4px;
  margin-right: 8px;
}
</style>