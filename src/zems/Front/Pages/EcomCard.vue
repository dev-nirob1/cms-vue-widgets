<script setup>
import EcomCard from '../Component/Widget/Ecom/EcomCard.vue';
import EcomFourth from './EcomFourth.vue';
import EcomThree from './EcomThree.vue';
import EcomTwo from './EcomTwo.vue';

</script>

<template>
  <div class="large-4 gap-1">

    <EcomCard/>
    <EcomTwo/>
    <EcomThree/>

  </div>
  <div class="large-2 gap-2 mt-2">
    <EcomFourth/>
    <EcomFourth/>
  </div>
</template>
