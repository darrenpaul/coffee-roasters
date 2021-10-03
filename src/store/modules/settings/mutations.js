import { SAVE_SCREEN_WIDTH } from "./types";

export default {
  [SAVE_SCREEN_WIDTH](state, width) {
    state.screenWidth = width;
  },
};
