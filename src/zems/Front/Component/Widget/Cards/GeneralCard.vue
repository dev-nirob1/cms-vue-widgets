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
        image="https://images.pexels.com/photos/35414303/pexels-photo-35414303/free-photo-of-stunning-sunrise-over-canadian-rockies-reflection.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
  height: 250px;
  width: 100%;
  overflow: hidden;
}

.card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem .5rem 0 0;
}

.card-footer .btn {
  width: 100%;
  color: var(--white-color);
  border-radius: .5rem;

}
</style>
