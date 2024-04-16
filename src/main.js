import { createApp } from "vue";
import "./style.css";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import moment from "moment";

const app = createApp(App);

app.use(VueAxios, axios);

app.use(store);

app.use(moment);

app.mount("#app");
