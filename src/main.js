import App from "./App.vue";
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import { createLayouts } from "./layouts";
import "./index.css";

export async function createApp() {
  const app = createSSRApp(App);
  const router = await createRouter();
  const layouts = await createLayouts();
  app.use(router);
  app.use(layouts);
  return { app, router };
}
