import { SET, SAVE } from "./types";

export default {
  [SET]({ commit }, option) {
    commit(SAVE, option);
  },
};
