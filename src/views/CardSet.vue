<template>
  <div class="card-group">
    <Card
      v-for="card in cards"
      v-bind:key="card.card_name"
      v-bind:card="card"
      v-bind:toggles="true"
      @replace-card="replaceCard"
    />
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "CardSet",
  components: {
    Card,
  },
  data () {
    return {
      cards: [],
    };
  },
  created () {
    axios
      .get(this.$endpointURL+"/cardset/")
      .then(res => this.getCards(res))
      .catch(err => console.log(err));
  },
  methods: {
    getCards (res) {
      this.cards = res.data;
    },
    replaceCard (name) {
      var index = this.cards.findIndex(f => f.card_name === name)
      axios
        .get(this.$endpointURL+"/kingdom/")
        .then(res => (this.cards.splice(index, 1, res.data)))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>