<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
<div class="testimonial-card">
  <!-- Decorative Quote Icon -->
 <div class="icon">
   <i class="bg-graphic fa-solid fa-quote-right fa-5x"></i>
 </div>

  <!-- Review Text -->
  <div class="flex">
    <BaseParagraph>
      <i class="fa-solid fa-quote-left fa-2x"></i>
      "Working with this team was an absolute pleasure. Their professionalism and creativity are unmatched!"
    </BaseParagraph>
  </div>

  <!-- Author Info -->
  <div class="flex align-center gap-1">
    <div class="image">
      <BaseImage
      class="height-full width-full"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTre4TseOqU7NynnfZPa9QM2YuHLO9KdVPwrA&s"
      alt="John Smith, CEO"
    />
    </div>
    <div>
      <SubTitle>John Smith</SubTitle>
      <span>CEO, Creative Solutions</span>
    </div>
  </div>
</div>

</template>
<style scoped>
.testimonial-card{
  padding: 1.5rem 1rem;
  border: 1px solid var(--light-color);
  border-radius: .5rem;
  position: relative;
}
.testimonial-card .icon{
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  color: var(--light-color);
}
.testimonial-card .image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

</style>
