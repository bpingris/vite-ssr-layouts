# Vite SSR layouts

Small changes to be able to use more or less the same layouts system as in Nuxt

## How to use

Add a `meta` property to your Vue component that are being used as a page (in the `/pages` directory).
In this meta property, add a sub-property called `layout`, it will use this component as the wrapper of your page.

Don't forget to register this component under the name you gave in your `layout`.

```html
<template>
...
</template>

<script>
export default {
  meta: {
    layout: 'default'
  },
  setup() {
    //...
  }
}
</script>
```

Create a `/layouts` directory, put your layouts in there

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
