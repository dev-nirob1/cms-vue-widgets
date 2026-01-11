<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

// horizontal or vertical
const layout = 'vertical';
// image position: (top/bottom/left/right)
const imagePosition = 'top';

// action button count:( 0/1/2)
const btnCount = 2;
//show badge (true / false)
const showBadge = false;
//show price (true / false)
const showPrice = true;
//show price (true / false)
const showPrevPrice = false;

// background style --- (color / image / none)
const bgStyle = 'none'

</script>

<template>
  <div class="card" :data-layout="layout" :data-image="imagePosition" :data-action="btnCount" :data-btnName="btnName"
    :data-badge="showBadge"
    :data-price="showPrice"
    :data-prev-price="showPrevPrice"
    :data-style="bgStyle"

    >

    <div class="image">
      <BaseImage
        image="https://images.pexels.com/photos/35414303/pexels-photo-35414303/free-photo-of-stunning-sunrise-over-canadian-rockies-reflection.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>
    <div class="card-content">
      <div class="card-body">
        <span class="badge">20% Off</span>
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
/* layout axios x / y  */
.card[data-layout='horizontal'] {
  flex-direction: row;
}

.card[data-layout='vertical'] {
  flex-direction: column;
}

/* horizontal card image position  */
.card[data-layout='horizontal'][data-image='left'] .image {
  order: 1;
}

.card[data-layout='horizontal'][data-image='left'] .card-content {
  order: 2;
}

.card[data-layout='horizontal'][data-image='right'] .image {
  order: 2;
}

.card[data-layout='horizontal'][data-image='right'] .card-content {
  order: 1;
}

/* vertical card image position  */
.card[data-layout='vertical'][data-image='top'] .image {
  order: 1;
}

.card[data-layout='vertical'][data-image='top'] .card-content {
  order: 2;
}

.card[data-layout='vertical'][data-image='bottom'] .image {
  order: 2;
}

.card[data-layout='vertical'][data-image='bottom'] .card-content {
  order: 1;
}

/* show badge  */
.card[data-badge='false'] .badge {
  display: none;
}

/* show previous price  */
.card[data-prev-price='false'] .prev-price {
  display: none;
}

/* show  price  */
.card[data-price='false'] .price {
  display: none;
}

/* action btn count  */
.card[data-action='1'] .btn:not(:first-child) {
  display: none;
}

.card[data-action='0'] .card-footer {
  display: none;
}

/* background style image */
.card[data-style ='image'] {
  background: url('https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center / cover no-repeat;
}
/* background style color  */
.card[data-style ='color'] {
  background: lightblue;
}

/* base style  */
.card {
  display: flex;
  gap: 1rem;
  padding: .5rem;
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
  position: relative;
}

.card .image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: .5rem .5rem 0 0;
}

.card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-footer {
  display: flex;
  gap: 1rem;
}

.card .btn {
  width: 100%;
  color: var(--white-color);
  border-radius: .5rem;
}

.card .badge {
  padding: .1rem .25rem;
  border-radius: .25rem;
  font-size: .9rem;
  color: var(--white-color);
  background: var(--primary-color);
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
