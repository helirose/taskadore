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

#grid {
  width: 80%;
  display: grid;
  grid-template-columns: 1em repeat(3, 1fr) 1em;
  grid-template-rows: 0 repeat(4, auto) 0;
  column-gap: 0;
  row-gap: 1em;
  margin: 1em auto;
  background: #FFFFFF;
}

</style>