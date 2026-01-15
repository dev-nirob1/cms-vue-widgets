<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
  <!-- default image at top. use image-left / image-right / image bottom to change position; -->

  <div class="card image-right">
    <div class="image">
      <BaseImage
        image="https://images.pexels.com/photos/35414303/pexels-photo-35414303/free-photo-of-stunning-sunrise-over-canadian-rockies-reflection.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div class="badge">20% Off</div>
    </div>
    <div class="card-content">
      <div class="card-body">
        <SubTitle>Step Into Comfort</SubTitle>
        <BaseParagraph>Discover our latest collection of sneakers designed for style, comfort.
        </BaseParagraph>
        <BaseParagraph class="price">Price: $99.99 <del class="prev-price">$105.99</del>
        </BaseParagraph>
      </div>
      <div class="card-footer">
        <BaseButton class="bg-secondary">View Details</BaseButton>
        <BaseButton class="bg-primary text-white">Add To Cart</BaseButton>
      </div>
    </div>
  </div>

</template>
<style scoped>
/* base styles  */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .75rem;
  border: 1px solid var(--light-color);
  position: relative;
}

.card .image {
  height: 250px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary-color);
  color: var(--white-color);
  padding: .25rem .5rem;
  font-weight: bold;
}

.card-footer {
  display: flex;
  gap: 1rem;
}

.card-footer .btn {
  color: var(--white-color);
  width: 100%;
}

/* based on class change  */

.image-bottom.card {
  flex-direction: column-reverse;
}

.image-left.card .image,
.image-right.card .image {
  width: 100%;
}

.image-left.card .card-content,
.image-right.card .card-content {
  width: 100%;
}

.image-left.card {
  flex-direction: row;
}

.image-right.card {
  flex-direction: row-reverse;
}
</style>
