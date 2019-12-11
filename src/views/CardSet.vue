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
      .get("http://api.gameofboards.com/cardset/")
      .then(res => (this.cards = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    replaceCard(name) {
      var index = this.cards.findIndex(f => f.card_name === name)
      axios
        .get("http://api.gameofboards.com/random/")
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