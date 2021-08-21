import { SAVE } from "./types";

export default {
  [SAVE](state, selected) {
    state.delivery = selected;
  },
};
