<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
  <section class="card">
    <div class="image">
      <BaseImage class="w-full h-full"
        image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
    <div class="card-body mt-1">
      <SubTitle>Step Into Comfort</SubTitle>
      <BaseParagraph>Discover our latest collection of sneakers designed for style, comfort, and everyday wear.
      </BaseParagraph>
    </div>
    <div class="card-footer">
      <BaseButton class="bg-primary text-white">View Details</BaseButton>
    </div>
  </section>
</template>
<style scoped>
.card {
  padding: .75rem;
  border-radius: .5rem;
  border: 1px solid var(--light-color);
}

.card .image {
  max-height: 250px;
  height: 100%;
  width: 100%;
}

.card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem .5rem 0 0;
}

.card-footer .btn {
  width: 100%;
  color: white;
  border-radius: .5rem;
}
</style>
