<script setup>
import FixedNavbar from '../Component/Widget/Navbar/FixedNavbar.vue';
import NavbarWithAvater from '../Component/Widget/Navbar/NavbarWithAvater.vue';

</script>

<template>
  <div>
    <FixedNavbar />
    <NavbarWithAvater/>
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
