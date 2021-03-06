import { createStore, createLogger } from "vuex";

import brewModule from "./modules/brew";
import blendModule from "./modules/blend";
import quantityModule from "./modules/quantity";
import grindModule from "./modules/grind";
import deliveryModule from "./modules/delivery";
import settingsModule from "./modules/settings";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  brew: brewModule,
  blend: blendModule,
  quantity: quantityModule,
  grind: grindModule,
  delivery: deliveryModule,
  settings: settingsModule,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
  plugins: [createLogger()],
});
