<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>
<!-- Variants change appearance
Layouts change structure
Components never change HTML -->
<template>
  <div class="card vertical">
    <div class="image">
      <BaseImage
        image="https://images.pexels.com/photos/35414303/pexels-photo-35414303/free-photo-of-stunning-sunrise-over-canadian-rockies-reflection.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div class="badge">20% Off</div>
    </div>
    <div class="card-content">
      <div class="card-body mt-1">
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
.card {
  border: 1px solid var(--light-color);
  position: relative;
}

.default-card .btn.bg-secondary,
.default-card .price,
.default-card .badge {
  display: none;
}

.default-card .card-body,
.default-card .card-footer {
  padding: .5rem;
}

.e-commerce.card {
  padding: .5rem;
}

.product-card.card {
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
}

.product-card .image {
  border-radius: .5rem .5rem 0 0;
}

.product-card .card-body,
.product-card .card-footer {
  padding: 0 .5rem;
}

.product-card .card-body {
  display: flex;
  flex-direction: column;
}

.product-card .card-body>* {
  order: 2;
}

.product-card .price {
  order: 1;
  margin-top: 0;
}

.product-card .badge {
  padding: .5rem;
  color: var(--white-color);
  border-radius: .5rem;
  background: var(--primary-color);
  position: absolute;
  left: 0;
  top: 0;
}

.product-card .btn {
  border-radius: .5rem;
}

.card-footer {
  display: flex;
  gap: 1rem;
}

.card .btn {
  color: var(--white-color);
  width: 100%;
}

.vertical.card {
  display: flex;
  /* gap: 1rem; */
  align-items: center;
}

.vertical .badge {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--primary-color);
  color: var(--white-color);
  padding: .5rem;
}

.vertical .image {
  flex:1;
  height: 250px;
}
.vertical .card-content{
  flex: 1;
  padding: 1rem;
}
.image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
