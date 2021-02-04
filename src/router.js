import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from "vue-router";

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob("./pages/*.vue");

async function generateRoutes() {
  const routes = Object.keys(pages).map(async (path) => {
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
    const meta = (await pages[path]()).default.meta;
    return {
      meta,
      path: name === "/home" ? "/" : name,
      component: pages[path],
    };
  });
  return await Promise.all(routes);
}

export async function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: await generateRoutes(),
  });
}
