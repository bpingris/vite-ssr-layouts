<template>
  <h1>Home</h1>
  <p>
    <button @click="state.count++">count is {{ state.count }}</button>
  </p>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({count: 0})
</script>

<style>

</style>
