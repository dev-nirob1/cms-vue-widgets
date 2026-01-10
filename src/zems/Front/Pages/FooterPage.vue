<script setup>
import FourColumnFooter from '../Component/Widget/Footer/FourColumnFooter.vue';
import ThreeColumnFooter from '../Component/Widget/Footer/ThreeColumnFooter.vue';

</script>

<template>
  <div class="footer-page">
    <ThreeColumnFooter/>
    <FourColumnFooter/>
  </div>
</template>
<style scoped>
  .footer-page {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
