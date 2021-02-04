<template>
  <h1 class="mb-5 text-3xl font-bold">Home</h1>
  <div class="flex flex-col items-center justify-center">
    <div>
      This page has a
      <code class="p-1 bg-gray-200 rounded-md">default</code> layout
    </div>
    <div>
      <button
        class="px-2 py-1 mt-2 text-white bg-blue-500 rounded"
        @click="state.count++"
      >
        count is {{ state.count }}
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  layout: "default",
  setup() {
    const state = reactive({ count: 0 });
    return {
      state,
    };
  },
};
</script>
