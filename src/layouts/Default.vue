<template>
  <nav class="flex items-center h-20 px-5 text-white bg-blue-800 border-b shadow-xl border-gray-50">
    <div class="text-2xl font-bold">Title</div>
    <div class="ml-auto space-x-4">
      <router-link class="text-lg" to="/">Home</router-link>
      <router-link class="text-lg" to="/about">About</router-link>
    </div>
  </nav>
  <div class="px-5 py-2">
  <slot />
  </div>
</template>

<style>
</style>
