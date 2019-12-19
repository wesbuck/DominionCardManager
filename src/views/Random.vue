<template>
  <div class="card-group">
    <div class="col mb-4">
      <Card v-bind="card_data" @replace-card="replaceCard" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Random",
  props: "card_data",
  components: {
    Card,
    Header,
  },
  data() {
    return {
      card_data: [],
    };
  },
  created() {
    axios
      .get("https://dominioncardapi.pythonanywhere.com/random/")
      .then(res => (this.card_data = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    replaceCard(name) {
      console.log(name)
      axios
        .get("https://dominioncardapi.pythonanywhere.com/random/")
        .then(res => (this.card_data = res.data))
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