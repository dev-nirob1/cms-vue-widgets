<script setup>
import SubTitle from '@/components/Elements/SubTitle.vue';
import ReusableCard from '../Component/Widget/Cards/ReusableCard.vue';
import TestimonialCard from '../Component/Widget/Cards/TestimonialCard.vue';
import GeneralCard from '../Component/Widget/Cards/GeneralCard.vue';
import StatsCard from '../Component/Widget/Cards/StatsCard.vue';

</script>

<template>
  <SubTitle class="my-1">Reusable Card</SubTitle>

  <div class="medium-2 large-3 gap-1">
    <ReusableCard />
  </div>

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
</template>
