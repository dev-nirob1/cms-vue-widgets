<script setup>
import SectionTitle from '@/components/Widgets/SectionTitle.vue';
import GeneralCard from '../Widget/Cards/GeneralCard.vue';
import StatsCard from '../Widget/Cards/StatsCard.vue';
import TestimonialCard from '../Widget/Cards/TestimonialCard.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
  <section class="card-section">
    <div class="container">
      <BaseTitle class="mb-2 text-center">Check out the different card variants</BaseTitle>

      <SubTitle class="my-1">Statistics Card</SubTitle>
      <div class="medium-2 large-3 gap-1">
        <StatsCard v-for="item in 3" :key="item" />
      </div>

      <SubTitle class="my-1">Multi Purpose Card</SubTitle>

      <div class="medium-2 large-3 gap-1">
        <GeneralCard v-for="item in 3" :key="item" />
      </div>

      <SubTitle class="my-1">Testimonial Card</SubTitle>

      <div class="medium-2 gap-1">
        <TestimonialCard v-for="item in 2" :key="item" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.card-section {
  padding: 2.5rem 0;
}
</style>
