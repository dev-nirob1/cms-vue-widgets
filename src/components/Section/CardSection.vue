<script setup>
import StatsCard from '../Widgets/Cards/StatsCard.vue';
import SectionTitle from '../Widgets/SectionTitle.vue';

</script>

<template>
  <section class="card-section mt-5">
    <div class="container">
      <SectionTitle class="text-center mb-2" title="Check out the different card variants" sub-title="Card Section" />

      <div class="medium-2 large-3 gap-2">
        <StatsCard v-for="item in 3" :key="item"/>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card-section {
  padding: 3.75rem 0;
}
</style>
