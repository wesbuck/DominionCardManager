<template>
  <div class="card-group">
    <Card 
      v-for="card in cards"
      v-bind:key="card.card_name"
      v-bind:card="card" 
      @replace-card="replaceCard" 
    />
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";

export default {
  name: "CardSet",
  props: "cards",
  components: {
    Card,
    Header,
  },
  data() {
    return {
      cards: [],
      allsets: [],
    };
  },
  created() {
    axios
      .get("https://api.gameofboards.com/cards/")
      .then(res => this.getCards(res))
      .catch(err => console.log(err));

  },
  methods: {
    getCards(res) {
      this.cards = res.data;
      this.allsets = [...new Set(res.data.map(card => card.set_name))];
    },
    replaceCard(name) {
      var index = this.cards.findIndex(f => f.card_name === name)
      axios
        .get("https://api.gameofboards.com/random/")
        .then(res => (this.cards.splice(index, 1, res.data)))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>