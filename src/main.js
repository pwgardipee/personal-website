import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import router from "./router/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCloud,
  faCodeBranch,
  faDatabase,
  faExternalLinkAlt,
  faServer,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
library.add(faLinkedin);
library.add(faAngellist);
library.add(faExternalLinkAlt);
library.add(faDatabase);
library.add(faServer);
library.add(faCodeBranch);
library.add(faTv);
library.add(faCloud);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
