import { SAVE } from "./types";

export default {
  [SAVE](state, selected) {
    state.quantity = selected;
  },
};
