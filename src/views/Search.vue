<template>
  <div>
    <SearchBar
      @search-cards="searchCards"
     />
    <div class="card-group">
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
import SearchBar from "@/components/SearchBar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "List",
  components: {
    Card,    
    SearchBar,
    Header,
  },
  data () {
    return {
      cards: [],
      all_cards: [],
    };
  },
  created () {
    axios
      .get(this.$endpointURL + "/cards/")
      .then(res => this.setupCards(res))
      .catch(err => console.log(err));
  },
  methods: {
    getCards (res) {
      this.cards = res.data;
      this.all_cards = res.data;
    },
    setupCards (res) {
      this.getCards(res);
    },
    searchCards (value, field) {
      //TODO: implement search (make cards a subset of all_cards)
      console.log("Search for '"+value+"' in '"+field+"' field(s)");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  margin:0;
}
</style>