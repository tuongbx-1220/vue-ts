import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import "vue-select/dist/vue-select.css";
// @ts-ignore
import vSelect from "vue-select";
//@ts-ignore
import cronLight from "@vue-js-cron/light";
import "@vue-js-cron/light/dist/light.css";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import "./assets/styles/notification.css"
//@ts-ignore
import { registerGlobalComponent } from "@/utils/import";
import router from "./router";
const app = createApp(App);

app.use(Toast, {});
registerGlobalComponent(app);
app.use(createPinia()).use(router);
app.use(cronLight);
app.component("v-select", vSelect);
app.mount("#app");
