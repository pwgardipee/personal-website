<template>
  <router-link
    type="button"
    to="/portfolio"
    class="uppercase inline-flex items-center border border-transparent text-sm font-semibold text-gray-400 hover:text-gray-600 focus:outline-none p-2"
  >
    Portfolio
  </router-link>
  <router-link
    type="button"
    to="/resume"
    class="uppercase inline-flex items-center border border-transparent text-sm font-semibold text-gray-400 hover:text-gray-600 focus:outline-none p-2"
    @click="handle"
  >
    Resume
  </router-link>
</template>

<script>
export default {};
</script>

<style></style>
