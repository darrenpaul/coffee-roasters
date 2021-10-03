import { SET_SCREEN_WIDTH, SAVE_SCREEN_WIDTH } from "./types";

export default {
  [SET_SCREEN_WIDTH]({ commit }, width) {
    commit(SAVE_SCREEN_WIDTH, width);
  },
};
