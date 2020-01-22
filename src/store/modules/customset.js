import axios from 'axios';
import Vue from 'vue';

const state = {
    cards: [],
};

const getters = {
    allCards: state => state.cards,
    numCards: state => state.cards.length,
};

const actions = {
    async addCard({ commit }, uuid) {
        await axios
            .get(Vue.prototype.$endpointURL+"/cards/?uuid="+uuid)
            .then(res => (commit("newCard", res.data[0])))
            .catch(err => console.log(err));
    },
    async removeCard({ commit }, uuid) {
        commit("deleteCard", uuid);
    },
    async fetchCards({ commit }) {
        await axios
            .get(Vue.prototype.$endpointURL+"/cardset/")
            .then(res => (commit("setCards", res.data)))
            .catch(err => console.log(err));
    },
};

const mutations = {
    setCards: (state, cards) => (state.cards = cards),
    newCard: (state, card) => state.cards.unshift(card),
    deleteCard: (state, uuid) => {
        const i = state.cards.map(item =>item.uuid).indexOf(uuid);
        state.cards.splice(i, 1);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};