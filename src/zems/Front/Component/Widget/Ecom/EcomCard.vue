<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

</script>

<template>
    <div class="card">
      <div class="image">
        <BaseImage class="w-full h-full"
          image="https://images.pexels.com/photos/35414303/pexels-photo-35414303/free-photo-of-stunning-sunrise-over-canadian-rockies-reflection.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div class="badge">20% Off</div>
      </div>
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
  position: relative;
}

.badge {
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: var(--primary-color);
  z-index: 999;
  color: var(--white-color);
  padding: .5rem;
  border-radius: .35rem;
}
.price{
  font-weight: bold;
}
.prev-price {
  color: rgb(from var(--primary-color)r g b / 50%);
}

.card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem .5rem 0 0;
}
.card-footer {
  display: flex;
  gap: 1rem;
}
.card-footer .btn {
  width: 100%;
  color: var(--white-color);
  border-radius: .5rem;

}
</style>
