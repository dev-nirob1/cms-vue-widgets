<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import { ref } from 'vue';

const gallery = ref([
  { src: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1613891186868-eebda780cc8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Rooftop' },
  { src: 'https://images.unsplash.com/photo-1613685301586-4f2b15f0ccd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', title: 'Drawing Room' },
  { src: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387', title: 'Study Room' },
  { src: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', title: 'Bedroom' },
  { src: 'https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Balcony View' },
]);

</script>

<template>
  <section class="gallery">

    <div class="container">

      <div class="all-2 medium-3 large-4 gap-1 masonry">
        <div v-for="(image, i) in gallery" :key="i" class="masonry-item relative">
          <BaseImage :image="image.src" :alt="image.alt" />
          <div class="caption flex-center">{{ image.title }}</div>
          <BaseButton><i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 3.75rem 0;
}

.btn {
  color: var(--primary-color);
  background: var(--white-color);
  position: absolute;
  right: 1rem;
  top: 1rem;
  opacity: 0;
}

.masonry-item {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: pointer;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: var(--white-color);
  font-weight: bold;
  font-size: 1.25rem;
  padding: .5rem 1rem;
  border-radius: .5rem;
  opacity: 0;
  pointer-events: none;
  transition: all .5s ease-in-out;
}

.masonry-item:hover .caption,
.masonry-item:hover .btn {
  opacity: 1;
}

@media (min-width: 768px) {
  .masonry {
    grid-auto-rows: 200px;
  }

  .masonry-item:nth-child(1) {
    grid-column: span 2
  }

  .masonry-item:nth-child(2) {
    grid-row: span 2
  }

  .masonry-item:nth-child(3) {
    grid-row: span 2
  }
}

@media (min-width: 992px) {
  .masonry {
    grid-auto-rows: 250px;
  }

  .masonry-item:nth-child(1) {
    grid-column: span 2
  }

  .masonry-item:nth-child(2) {
    grid-row: inherit;
  }

  .masonry-item:nth-child(3) {
    grid-row: span 2
  }

  .masonry-item:nth-child(4) {
    grid-row: span 2
  }

  .masonry-item:nth-child(5) {
    grid-column: span 2
  }

  .masonry-item:nth-child(6) {
    grid-column: span 3
  }
}
</style>
