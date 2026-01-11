<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue'
import BaseImage from '@/components/Elements/BaseImage.vue'
import BaseParagraph from '@/components/Elements/BaseParagraph.vue'
import SubTitle from '@/components/Elements/SubTitle.vue'

/* ======================
   CMS / CLIENT CONTROLS
====================== */

// vertical | horizontal
const layout = 'vertical'

// top | bottom | left | right
const imagePosition = 'top'

// color | image
const bgType = 'image'

// 0 | 1 | 2
const actions = 2

const showBadge = false
const showPrice = true

const title = 'Step Into Comfort'
const description =
  'Discover our latest collection of sneakers designed for style and comfort.'

const image =
  'https://images.pexels.com/photos/35414303/pexels-photo-35414303/free-photo-of-stunning-sunrise-over-canadian-rockies-reflection.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const cardStyles = {
  '--bg-color': '#f5f5f5',
  '--bg-image':
    "url('https://images.unsplash.com/photo-1674027392887-751d6396b710')"
}

const buttons = [
  { label: 'View Details', class: 'bg-secondary' },
  { label: 'Add To Cart', class: 'bg-primary text-white' }
]
</script>

<template>
  <!-- HTML NEVER CHANGES -->
  <div
    class="card"
    :data-layout="layout"
    :data-image="imagePosition"
    :data-bg="bgType"
    :data-actions="actions"
    :style="cardStyles"
  >
    <div class="image">
      <BaseImage :image="image" />
      <div class="badge" v-if="showBadge">20% Off</div>
    </div>

    <div class="card-content">
      <div class="card-body">
        <SubTitle>{{ title }}</SubTitle>

        <BaseParagraph>
          {{ description }}
        </BaseParagraph>

        <BaseParagraph class="price" v-if="showPrice">
          Price: $99.99 <del>$105.99</del>
        </BaseParagraph>
      </div>

      <div class="card-footer">
        <BaseButton
          v-for="(btn, index) in buttons"
          :key="index"
          :class="btn.class"
        >
          {{ btn.label }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ======================
   BASE CARD
====================== */
.card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: var(--bg-color, white);
  position: relative;
}

/* ======================
   LAYOUT (AXIS ONLY)
====================== */
.card[data-layout='vertical'] {
  flex-direction: column;
}

.card[data-layout='horizontal'] {
  flex-direction: row;
}

/* ======================
   DEFAULT ORDER
====================== */
.card .image {
  order: 1;
}

.card .card-content {
  order: 2;
}

/* ======================
   IMAGE POSITION (ORDER ONLY)
====================== */

/* vertical */
.card[data-layout='vertical'][data-image='bottom'] .image {
  order: 2;
}

.card[data-layout='vertical'][data-image='bottom'] .card-content {
  order: 1;
}

/* horizontal */
.card[data-layout='horizontal'][data-image='right'] .image {
  order: 2;
}

.card[data-layout='horizontal'][data-image='right'] .card-content {
  order: 1;
}

/* ======================
   BACKGROUND TYPE
====================== */
.card[data-bg='image'] {
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
}

/* ======================
   IMAGE
====================== */
.image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

/* scoped fix */
.image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ======================
   BADGE
====================== */
.badge {
  position: absolute;
  top: 0;
  left: 0;
  background: #ff5722;
  color: white;
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
}

/* ======================
   CONTENT
====================== */
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price {
  font-weight: bold;
}

/* ======================
   ACTION BUTTONS
====================== */
.card-footer {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.card[data-actions='0'] .card-footer {
  display: none;
}

.card[data-actions='1'] .card-footer .btn:not(:first-child) {
  display: none;
}

.card .btn {
  width: 100%;
  color: white;
}
</style>
