<script setup>
import SidebarSection from '@/components/Section/SidebarSection.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="layout">
    <SidebarSection/>
    <div class="router-view">
      <RouterView/>
    </div>
  </div>
</template>
<style scoped>
  .layout{
    display: flex;
    gap: 2rem;
  }
.router-view {
  flex: 1;
}
</style>
