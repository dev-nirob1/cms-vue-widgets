<script setup>
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';


</script>

<template>
  <div class="stats-card">
    <!-- card icon  -->
    <div class="icon">
      <i class="fa-solid fa-award fa-3x"></i>
    </div>
    <!-- card description  -->
    <div>
      <BaseTitle>30+</BaseTitle>
      <BaseParagraph>Industry Awards</BaseParagraph>
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  text-align: center;
  padding: 2rem 1rem;
  border: 1px solid var(--light-color);
  border-radius: .5rem;
}

.stats-card .icon {
  margin-bottom: 1rem;
  color: var(--primary-color);
}
</style>
