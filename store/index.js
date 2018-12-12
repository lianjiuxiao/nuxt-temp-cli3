import Vue from 'vue';
import Vuex from 'vuex';
import ModuleUser from './modules/ModuleUser';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    ModuleUser
  }
});

export default store
