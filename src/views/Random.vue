<template>
  <div class="card-group">
    <Card
      v-bind:card="card_data"
      v-bind:toggles="true"
      @replace-card="replaceCard"
    />
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "Random",
  components: {
    Card,
  },
  data () {
    return {
      card_data: [],
    };
  },
  created () {
    axios
      .get(this.$endpointURL+"/random/")
      .then(res => (this.card_data = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    replaceCard () {
      axios
        .get(this.$endpointURL+"/random/")
        .then(res => (this.card_data = res.data))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>