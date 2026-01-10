<script setup>
import FixedNavbar from '../Component/Widget/Navbar/FixedNavbar.vue';

</script>

<template>
  <div>
    <FixedNavbar />
    <FixedNavbar />
    <FixedNavbar />
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
