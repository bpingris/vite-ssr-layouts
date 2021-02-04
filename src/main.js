import App from "./App.vue";
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import "./index.css";

export async function createApp() {
  const app = createSSRApp(App);
  const router = await createRouter();
  app.use(router);
  return { app, router };
}
