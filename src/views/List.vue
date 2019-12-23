<template>
  <div class="row">
    <div class="col-sm-2">
      <h4>Choose Set:</h4>
      <RadioFilter
        v-bind:filters="allsets"
        v-bind:name="'allsets'"
        @update-filter="updateFilter" 
        @remove-filter="fetchAllCards" 
      />
    </div>
    <div class="card-group col-sm-10">
      <Card 
        v-for="card in cards"
        v-bind:key="card.card_name"
        v-bind:card="card"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
import RadioFilter from "@/components/RadioFilter.vue";
import Header from "@/components/Header.vue";

export default {
  name: "List",
  components: {
    Card,
    RadioFilter,
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
      .then(res => this.setupCards(res))
      .catch(err => console.log(err));
  },
  methods: {
    getCards(res) {
      this.cards = res.data;
    },
    setupCards(res) {
      this.getCards(res);
      this.allsets = [...new Set(res.data.map(card => card.set_name))];
    },
    updateFilter(name) {
      axios
        .get("https://api.gameofboards.com/cards/?set_name="+name)
        .then(res => this.getCards(res))
        .catch(err => console.log(err));
    },
    fetchAllCards() {
      axios
        .get("https://api.gameofboards.com/cards/")
        .then(res => this.getCards(res))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>