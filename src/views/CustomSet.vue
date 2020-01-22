<template>
  <div>
    <div v-if="Object.keys(allCards).length" 
        class="text-center card-group">
      <Card
        v-for="card in allCards"
        :key="card.uuid"
        :card="card"
      />
    </div>
    <div v-else class="container">
        <p>Please select Cards from the links above, or <a @click="fetchCards()" :href="'#'+this.$route.path">Start With a Random Set</a>.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/Card.vue";

export default {
    name: "CustomSet",
    components: {
        Card,
    },
    methods: {
        ...mapActions(['fetchCards']),
    },
    computed: mapGetters(["allCards"]),
}
</script>

<style>

</style>