<template>
  <div>
    <SearchBar @search-cards="searchCards" />
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
      if ('' == value) {
        this.cards = this.all_cards;
        return;
      }
      var i = 0;

      //search for 'value' in all fields
      if ('All' == field) {
        this.cards = [];
        for (i = 0; i < this.all_cards.length; i++) {
          var text = Object.values(this.all_cards[i]).join(' ');
          if (text.toUpperCase().indexOf(value.toUpperCase()) > -1) {
            this.cards.push(this.all_cards[i]);
          }
        }
        return;
      }

      //search for 'value' in the selected 'field'
      var key = "card_name";
      switch (field) {
        case 'Text':
          key = 'card_text';
          break;
        case 'Cost':
          key = 'cost';
          break;
        case 'Type':
          key = 'type';
          break;
      }
      console.log("Search for '" + value + "' in the '" + key + "' field");
      this.cards = [];
      for (i = 0; i < this.all_cards.length; i++) {
        if (this.all_cards[i][key].toUpperCase().indexOf(value.toUpperCase()) > -1) {
          this.cards.push(this.all_cards[i]);
        }
      }
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  margin: 0;
}
</style>