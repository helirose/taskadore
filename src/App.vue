<script setup>
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
  <site-header />
  <div id="grid">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>