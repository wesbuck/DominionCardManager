<template>
  <div class="col mb-4">
    <div
      class="card h-100"
      :class="card.set_name"
    >
      <div
        class="card-header text-left"
        :class="formatTypeName(card.type)"
      >
        <div class="row">
          <div class="col-9">
            <h5 class="card-title">
              {{card.card_name}}
            </h5>
          </div>
          <div class="col-3 text-right">
            <h5><span class="badge badge-secondary">{{card.cost}}</span></h5>
          </div>
        </div>
        <h6 class="card-subtitle">
          <em>{{card.type}}</em>
        </h6>
      </div>
      <div class="card-body">
        <p
          class="card-text text-center"
          v-html="new_lines(card.card_text)"
        ></p>
      </div>
      <div
        v-if="card.is_kingdom_card"
        class="card-footer text-right"
      >
        <button
          v-if="toggles"
          type="button"
          class="btn btn-danger mr-2"
          aria-label="Replace Card"
          @click="getNewCard(card.card_name)"
        >
          <span class="fas fa-redo-alt"></span>
        </button>

        <button
          v-if="allCards.find(item => item.uuid === card.uuid)"
          type="button"
          class="btn btn-danger"
          aria-label="Remove Card from Custom Set"
          @click="removeCard(card.uuid)"
        >
          <span class="fas fa-minus"></span>
        </button>
        <button
          v-else
          type="button"
          class="btn btn-success"
          aria-label="Add Card to Custom Set"
          @click="addCard(card.uuid)"
        >
          <span class="fas fa-plus"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    card: Object,
    toggles: Boolean,
  },
  methods: {
    ...mapActions(['addCard', "removeCard"]),
    new_lines (text) {
      return text.replace(/\\n/g, "<div style=\"line-height:6px;\">&nbsp</div>").replace(/\\d/g, "<div style=\"border-bottom: 1px solid black; line-height: 12px; margin-bottom: 10px;\">&nbsp</div>");
    },
    getNewCard (name) {
      this.$emit('replace-card', name)
    },
    formatTypeName (type) {
      var dur = type.indexOf("Duration");
      if (dur > 0) {
        return "Duration-type"; // account for "Action-Duration"
      }
      var n = type.indexOf('-');
      return type.substring(0, n != -1 ? n : type.length).trim() + "-type";
    },
  },
  computed: mapGetters(["allCards"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.card {
  width: 15.9rem;
}

p.card-text {
  font-size: 90%;
}

.Action-type {
  background-color: $action-type-color;
}
.Event-type {
  background-color: $event-type-color;
}
.Treasure-type {
  background-color: $treasure-type-color;
}
.Boon-type {
  background-color: $boon-type-color;
}
.Victory-type {
  background-color: $victory-type-color;
}
.Landmark-type {
  background-color: $landmark-type-color;
}
.Duration-type {
  background-color: $duration-type-color;
}
.Artifact-type {
  background-color: $artifact-type-color;
}
.Reaction-type {
  background-color: $reaction-type-color;
}
.Curse-type {
  background-color: $curse-type-color;
  color: white;
}
.Hex-type {
  background-color: $hex-type-color;
  color: white;
}
.Night-type {
  background-color: $night-type-color;
  color: white;
}
.Project-type {
  background-color: $project-type-color;
}
.State-type {
  background-color: $state-type-color;
}

.Base {
  border: 2px solid $base-cards-color;
}

.Dominion {
  border: 2px solid $dominion-set-color;
}
.Intrigue {
  border: 2px solid $intrigue-set-color;
}
.Seaside {
  border: 2px solid $seaside-set-color;
}
.Alchemy {
  border: 2px solid $alchemy-set-color;
}
.Prosperity {
  border: 2px solid $prosperity-set-color;
}
.Cornucopia {
  border: 2px solid $cornucopia-set-color;
}
.Hinterlands {
  border: 2px solid $hinterlands-set-color;
}
.Dark {
  border: 2px solid $dark-set-color;
}
.Guilds {
  border: 2px solid $guilds-set-color;
}
.Adventures {
  border: 2px solid $adventures-set-color;
}
.Empires {
  border: 2px solid $empires-set-color;
}
.Nocturne {
  border: 2px solid $nocturne-set-color;
}
.Renaissance {
  border: 2px solid $renaissance-set-color;
}
.Promo {
  border: 2px solid $promo-set-color;
}
</style>