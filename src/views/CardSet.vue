<template>
  <div class="card-group">
    <div class="col mb-4" v-bind:key="card.card_name" v-for="card in cards">
      <Card v-bind="card" @replace-card="replaceCard" />
    </div>
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
    };
  },
  created() {
    axios
      .get("https://api.gameofboards.com/cardset/")
      .then(res => this.getCards(res))
      .catch(err => console.log(err));
  },
  methods: {
    getCards(res) {
      this.cards = res.data;
/*
      var i;
      for (i = 0; i < this.cards.length; i++) {
        while(this.cards[i].set_num === 8 || this.cards[i].type === "Event" || this.cards[i].type === "Landmark") {
          this.replaceCard(this.cards[i].card_name); //ensure no cards from Base Set (like coins, victory, etc)
        }
      }*/
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
.card-group {
  margin-top: 16px;
}
</style>