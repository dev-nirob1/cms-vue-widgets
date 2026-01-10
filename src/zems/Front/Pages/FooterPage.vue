<script setup>
import SubTitle from '@/components/Elements/SubTitle.vue';
import FourColumnFooter from '../Component/Widget/Footer/FourColumnFooter.vue';
import ThreeColumnFooter from '../Component/Widget/Footer/ThreeColumnFooter.vue';

</script>

<template>
  <div class="footer-page">
    <SubTitle>Three Column Footer</SubTitle>
    <ThreeColumnFooter/>
    <SubTitle>Four Column Footer</SubTitle>
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
