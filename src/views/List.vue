<template>
  <div class="row">
    <div class="col-sm-2">

      <h4>Choose Set:</h4>
      <RadioFilter
        v-bind:filters="allsets"
        v-bind:name="'allsets'"
        @update-filter="updateSetFilter"
        @remove-filter="removeSetFilter"
      />

      <h4>Choose Cost:</h4>
      <RadioFilter
        v-bind:filters="allcosts"
        v-bind:name="'allcosts'"
        @update-filter="updateCostFilter"
        @remove-filter="removeCostFilter"
      />

      <h4>Choose Type:</h4>
      <RadioFilter
        v-bind:filters="alltypes"
        v-bind:name="'alltypes'"
        @update-filter="updateTypeFilter"
        @remove-filter="removeTypeFilter"
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
  data () {
    return {
      cards: [],
      allsets: [],
      allcosts: [],
      alltypes: [],
      set_name: "",
      cost: "",
      type: "",
    };
  },
  created () {
    axios
      .get(this.$endpointURL+"/cards/")
      .then(res => this.setupCards(res))
      .catch(err => console.log(err));
  },
  methods: {
    getCards (res) {
      this.cards = res.data;
    },
    setupCards (res) {
      this.getCards(res);
      this.allsets = [...new Set(res.data.map(card => card.set_name))].sort();
      this.allcosts = [...new Set(res.data.map(card => card.cost))].sort(function(a, b){return a.replace( /\D/g, '') - b.replace( /\D/g, '')}); //strip non-numeric & sort
      this.alltypes = [...new Set(res.data.map(card => card.type))].sort();
    },
    updateSetFilter (name) {
      this.set_name = name;
      this.updateFilter();
    },
    removeSetFilter () {
      this.set_name = "";
      this.updateFilter();
    },
    updateCostFilter (cost) {
      this.cost = cost;
      this.updateFilter();
    },
    removeCostFilter () {
      this.cost = "";
      this.updateFilter();
    },
    updateTypeFilter (type) {
      this.type = type;
      this.updateFilter();
    },
    removeTypeFilter () {
      this.type = "";
      this.updateFilter();
    },
    updateFilter () {
      axios
        .get(this.$endpointURL + "/cards/?set_name=" + this.set_name + "&cost=" + this.cost + "&type=" + this.type)
        .then(res => this.setupCards(res))
        .catch(err => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>