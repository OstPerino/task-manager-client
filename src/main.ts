import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import Icons from "@/utils/icons/icons";
import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";
import { toastOptions } from "@/utils/toasts/toasts";
import "vue3-toastify/dist/index.css";

createApp(App)
  .use(router)
  .use(store)
  .use(Vue3Toasity, toastOptions as ToastContainerOptions)
  .component(Icons.fontAwesomeIconComponent.component, Icons.library)
  .mount("#app");