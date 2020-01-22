import Vue from 'vue';
import Vuex from 'vuex';
import customset from '@/store/modules/customset';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        customset,
    },
})