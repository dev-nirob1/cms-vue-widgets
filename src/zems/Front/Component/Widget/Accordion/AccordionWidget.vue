<script setup>
import { ref } from 'vue';

const currentOpenItem = ref(0)
const toggleAccordion = (index) => {
  currentOpenItem.value = index
}

</script>
<template>
  <div v-for="(data, i) in 3" :key="i" class="accordion">
    <div @click="toggleAccordion(i)" class="accordion-title">
      this is accordion
      <i :class="currentOpenItem == i ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
    </div>
    <div class="accordion-body" :class="{ 'active': currentOpenItem == i }">
      this is data
    </div>
  </div>
</template>
<style scoped>
.accordion {
  margin-bottom: 1rem;
  overflow: hidden;
}

.accordion-title {
  padding: 1rem;
  font-weight: 500;
  color: var(--white-color);
  background-color: var(--secondary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: .5rem .5rem 0 0;
}

.accordion-body {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  background-color: var(--white-color);
  transition: all 0.5s ease;
}

.accordion-body.active {
  padding: 1rem;
  max-height: 500px;
}
</style>
