import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faChevronDown,
  faChevronUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./assets/tailwind.css";

library.add(faChevronUp, faChevronDown, faBars);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
