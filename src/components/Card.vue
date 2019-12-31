<template>
  <div class="col mb-4">
    <div
      class="card h-100"
      :class="card.set_name"
      style="width: 15.9rem;"
    >
      <div
        class="card-header"
        align="left"
      >
        <h5 class="card-title"><span class="badge badge-secondary">{{card.cost}}</span> {{card.card_name}}</h5>
      </div>
      <div class="card-body text-center">
        <p
          class="card-text"
          v-html="new_lines(card.card_text)"
        ></p>
      </div>
      <div
        class="card-footer"
        :class="formatTypeName(card.type)"
        align="left"
      >
        <h6 class="card-subtitle">
          {{card.type}}
          <button
            v-if="toggles"
            type="button"
            class="close"
            aria-label="Close"
            @click="getNewCard(card.card_name)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
    toggles: Boolean,
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

h5.card-title {
  margin-bottom: 0px;
}
h6.card-subtitle {
  margin-top: 0px;
}
button.close {
  color: red;
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