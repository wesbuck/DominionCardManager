<template>
    <div class="text-center card-group">
      <Card
        v-for="card in cards"
        v-bind:key="card.card_name"
        v-bind:card="card"
      />
    </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "Expansion",
  components: {
    Card,
  },
  data () {
    return {
      cards: [],
    };
  },
  created () {
    this.updateCards(this.$route.params.expansionId);
  },
  watch: {
    $route(to) {
        this.updateCards(to.params.expansionId);
    },
  },
  methods: {
    updateCards(expansionId) {
        axios
        .get(this.$endpointURL + "/cards/?set_name=" + expansionId)
        .then(res => this.cards = res.data)
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>