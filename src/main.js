import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faReddit } from "@fortawesome/free-brands-svg-icons";

library.add(faDiscord, faReddit);

const app = createApp(App);

app.use(router);

app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");
