import { SAVE } from "./types";

export default {
  [SAVE](state, selected) {
    state.blend = selected;
  },
};
