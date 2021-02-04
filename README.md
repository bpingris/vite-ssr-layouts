# Vite SSR layouts

Small changes to be able to use more or less the same layout system as in Nuxt.
Based on [vite-ssr-vue](https://github.com/vitejs/vite/tree/main/packages/playground/ssr-vue).

## Install
```js
const layouts = await createLayouts()
app.use(layouts)
  ```
#### TODO

## How to use?

Add a `layout` property to your Vue component that are being used as a page (in the `pages/` directory).
In this property, add the name of the layout you want to use.

*Don't forget to register this component under the name you gave in your `layout`.*

```html
<template>
...
</template>

<script>
export default {
  layout: 'default', // <default> <current-page /> </default>
  setup() {
    //...
  }
}
</script>
```

Create a `layouts/` directory, put your layouts in there

ex:
```html
<template>
  <my-cool-navbar />
  <stuff />
  <slot />
</template>

<script>
//...
</script>
```

Setup your layouts at the root of your Vue application (`App.vue`).

```html
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import Default from './layouts/Default.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    Default
  },
  setup() {
    const route = useRoute()
      const layout = computed(() => route.meta.layout || 'div')

      return {
        layout
      }
  }
}
</script>
```
