export async function createLayouts() {
  const _layouts = import.meta.glob("./layouts/*.vue");
  const layouts = new Layouts();

  for (const layout in _layouts) {
    const name = layout.match(/\.\/layouts\/(.*)\.vue$/)[1].toLowerCase();
    const l = await _layouts[layout]();
    layouts.add({ name, component: l.default || l });
  }
  return layouts;
}

//TODO: find better variables name, maybe?
class Layouts {
  constructor() {
    this._layouts = [];
  }

  add({ name, component }) {
    this._layouts.push({ name, component });
  }

  install(app) {
    for (const layout of this._layouts) {
      app.component(layout.name, layout.component);
    }
  }
}
