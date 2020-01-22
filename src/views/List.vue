<template>
  <div class="row container-xl w-100">
    <div
      class="accordion col-2 dcm-sidebar"
      id="filterSidebar"
    >
      <RadioFilter
        v-bind:filters="allsets"
        v-bind:name="'set'"
        @update-filter="updateSetFilter"
        @remove-filter="removeSetFilter"
      />

      <RadioFilter
        v-bind:filters="allcosts"
        v-bind:name="'cost'"
        @update-filter="updateCostFilter"
        @remove-filter="removeCostFilter"
      />

      <RadioFilter
        v-bind:filters="alltypes"
        v-bind:name="'type'"
        @update-filter="updateTypeFilter"
        @remove-filter="removeTypeFilter"
      />

    </div>
    <div class="col-10 text-center card-group">
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

export default {
  name: "List",
  components: {
    Card,
    RadioFilter,
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
      .get(this.$endpointURL + "/cards/")
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
      this.allcosts = [...new Set(res.data.map(card => card.cost))].sort(function (a, b) { return a.replace(/\D/g, '') - b.replace(/\D/g, '') }); //strip non-numeric & sort
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
.dcm-sidebar {
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}
</style>