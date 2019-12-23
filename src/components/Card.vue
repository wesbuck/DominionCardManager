<template>
  <div class="col mb-4">
    <div class="card h-100" :class="card.set_name" style="width: 15.9rem;">
      <div class="card-header">
        <h5 class="card-title"><span class="badge badge-secondary">{{card.cost}}</span> {{card.card_name}}</h5>
      </div>
      <div class="card-body text-center">
        <p class="card-text" v-html="new_lines(card.card_text)"></p>
      </div>
      <div class="card-footer" :class="formatTypeName(card.type)">
          <h6 class="card-subtitle">
            {{card.type}}
            <button v-if="toggles" type="button" class="close" aria-label="Close" @click="getNewCard(card.card_name)">
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
    new_lines(text) {
      return text.replace(/\\n/g, "<div style=\"line-height:6px;\">&nbsp</div>").replace(/\\d/g, "<div style=\"border-bottom: 1px solid black; line-height: 12px; margin-bottom: 10px;\">&nbsp</div>");
    },
    getNewCard(name) {
      this.$emit('replace-card', name)
    },
    formatTypeName(type) {
      var dur = type.indexOf("Duration");
      if(dur > 0)
      {
        return "Duration-type"; // account for "Action-Duration"
      }
      var n = type.indexOf('-');
      return type.substring(0, n != -1 ? n : type.length).trim()+"-type";
    },
  },
};
</script>

<style scoped>
h5.card-title {
  margin-bottom:0px;
}
h6.card-subtitle {
  margin-top:0px;
}
button.close {
  color: red;
}
p.card-text {
  font-size: 90%;
}

.Action-type {
  background-color: darkgrey;
}
.Treasure-type {
  background-color: goldenrod;
}
.Victory-type {
  background-color: lightgreen;
}
.Duration-type {
  background-color: lightsalmon;
}
.Reaction-type {
  background-color: lightskyblue;
}

.Base {
  background-color:lightgrey;
}

.Dominion {
  border-color: red;
}
.Intrigue {
  border-color: blue;
}
.Seaside {
  border-color: orange;
}
.Alchemy {
  border-color: purple;
}
.Prosperity {
  border-color: darkgreen;
}
.Cornucopia {
  border-color: yellow;
}
.Hinterlands {
  border-color: chartreuse;
}
.Dark {
  border-color: orangered;
}
.Guilds {
  border-color: palevioletred;
}
.Adventures {
  border-color: darkgrey;
}
.Empires {
  border-color: goldenrod;
}
.Nocturne {
  border-color: darkblue;
}
.Renaissance {
  border-color: teal;
}
.Promo {
  border-color: black;
}
</style>