<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseButton from '@/components/Elements/BaseButton.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const gallery = ref([
  { src: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Kitchen', tag: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1613891186868-eebda780cc8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Rooftop', tag: 'Exterior' },
  { src: 'https://images.unsplash.com/photo-1613685301586-4f2b15f0ccd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', title: 'Drawing Room', tag: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387', title: 'Study Area', tag: 'Workspace' },
  { src: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', title: 'Master Bedroom', tag: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', title: 'Balcony View', tag: 'Exterior' },
]);

const bentoImages = gallery.value.slice(0, 5); // 5 items make a good bento box
const carouselImages = [...gallery.value, ...gallery.value]; // Duplicate for scrolling feel

const originalCode = `<template>
  <div class="all-2 medium-3 large-4 gap-1 masonry">
    <div v-for="(image, i) in gallery" :key="i" class="masonry-item relative">
      <BaseImage :image="image.src" :alt="image.title" />
      <div class="caption flex-center">{{ image.title }}</div>
      <BaseButton><i class="fa-solid fa-up-right-and-down-left-from-center"></i></BaseButton>
    </div>
  </div>
</template>`;

const bentoCode = `<template>
  <div class="bento-gallery">
    <div class="bento-item featured">
      <img src="..." />
      <div class="bento-content"><h3>Modern Kitchen</h3></div>
    </div>
    <div class="bento-item tall">
      <img src="..." />
    </div>
    <div class="bento-item wide">
      <img src="..." />
    </div>
    <div class="bento-item square">
      <img src="..." />
    </div>
    <div class="bento-item square">
      <img src="..." />
    </div>
  </div>
</template>`;

const carouselCode = `<template>
  <div class="carousel-wrapper">
    <div class="carousel-track">
      <div v-for="img in images" :key="img.id" class="carousel-item">
        <img :src="img.src" />
        <div class="carousel-hover">
          <button class="view-btn">View Project</button>
        </div>
      </div>
    </div>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Galleries</h1>
    <p class="page-description">Beautiful photo layouts including custom CSS Grids, Bento patterns, and smooth Carousels.</p>
  </div>

  <!-- Variant 1: Original Custom Grid (Restored) -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Custom Responsive Grid</SubTitle>
      <button @click="toggle('original')" class="btn-toggle-code">{{ show['original'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <!-- Restoring exact original layout struct -->
      <div class="all-2 medium-3 large-4 gap-1 masonry">
        <div v-for="(image, i) in gallery" :key="i" class="masonry-item relative">
          <BaseImage :image="image.src" :alt="image.title" />
          <div class="caption flex-center">{{ image.title }}</div>
          <BaseButton class="zoom-btn"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></BaseButton>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['original']" :code="originalCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Modern Bento Grid -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Bento Grid</SubTitle>
      <button @click="toggle('bento')" class="btn-toggle-code">{{ show['bento'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad bento-bg">
      <div class="bento-container">
        <div class="bento-gallery">
          <!-- Item 1: Featured (Large Square) -->
          <div class="bento-item featured">
            <img :src="bentoImages[0].src" />
            <div class="bento-overlay">
              <span class="gl-tag highlight">{{ bentoImages[0].tag }}</span>
              <h3>{{ bentoImages[0].title }}</h3>
            </div>
          </div>
          
          <!-- Item 2: Tall -->
          <div class="bento-item tall">
            <img :src="bentoImages[1].src" />
            <div class="bento-overlay clean">
              <h4>{{ bentoImages[1].title }}</h4>
            </div>
          </div>
          
          <!-- Item 3: Square -->
          <div class="bento-item square">
            <img :src="bentoImages[2].src" />
            <div class="bento-overlay clean">
              <h4>{{ bentoImages[2].title }}</h4>
            </div>
          </div>
          
          <!-- Item 4: Square -->
          <div class="bento-item square">
            <img :src="bentoImages[3].src" />
            <div class="bento-overlay clean">
              <h4>{{ bentoImages[3].title }}</h4>
            </div>
          </div>

          <!-- Item 5: Wide -->
          <div class="bento-item wide">
            <img :src="bentoImages[4].src" />
            <div class="bento-overlay clean">
              <h4>{{ bentoImages[4].title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['bento']" :code="bentoCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Horizontal Snap Carousel -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Horizontal Scroll Snap Container</SubTitle>
      <button @click="toggle('carousel')" class="btn-toggle-code">{{ show['carousel'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area dark-bg">
      <div class="carousel-wrapper">
        <div class="carousel-header">
           <h3 style="color:white; margin:0">Latest Projects</h3>
           <span style="color:#94a3b8; font-size:0.9rem">Scroll sideways →</span>
        </div>
        <div class="carousel-track">
          <div v-for="(img, idx) in carouselImages" :key="'c'+idx" class="carousel-item">
            <img :src="img.src" />
            <div class="carousel-overlay">
              <h4>{{ img.title }}</h4>
              <button class="view-btn">View Case Study</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['carousel']" :code="carouselCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 2rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.no-pad { padding: 2rem; background: #f8fafc; overflow: hidden; }
.preview-area.no-pad.bento-bg { background: white; border-color: transparent;}
.preview-area.dark-bg { padding: 3rem 0; background: #0f172a; border-color: transparent; overflow: hidden; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* Global Utilities */
.gl-tag { display: inline-block; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); color: white; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.35rem 0.75rem; border-radius: 20px; margin-bottom: auto; }
.gl-tag.highlight { background: #4f46e5; }

/* 1. Original User Styles (Restored) */
.zoom-btn {
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
:deep(.masonry-item img) {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
}
.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: var(--white-color);
  color: var(--dark-color);
  font-weight: bold;
  font-size: 1.25rem;
  padding: .5rem 1rem;
  border-radius: .5rem;
  opacity: 0;
  pointer-events: none;
  transition: all .5s ease-in-out;
}
.masonry-item:hover .caption,
.masonry-item:hover .zoom-btn {
  opacity: 1;
}

@media (min-width: 768px) {
  .masonry { grid-auto-rows: 200px; display: grid;}
  .masonry-item:nth-child(1) { grid-column: span 2; }
  .masonry-item:nth-child(2) { grid-row: span 2; }
  .masonry-item:nth-child(3) { grid-row: span 2; }
}

@media (min-width: 992px) {
  .masonry { grid-auto-rows: 250px; display: grid;}
  .masonry-item:nth-child(1) { grid-column: span 2; }
  .masonry-item:nth-child(2) { grid-row: inherit; }
  .masonry-item:nth-child(3) { grid-row: span 2; }
  .masonry-item:nth-child(4) { grid-row: span 2; }
  .masonry-item:nth-child(5) { grid-column: span 2; }
  .masonry-item:nth-child(6) { grid-column: span 3; }
}

/* 2. Bento Grid */
.bento-container { width: 100%; max-width: 1000px; margin: 0 auto; }
.bento-gallery { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 200px; gap: 1.5rem; }
.bento-item { position: relative; border-radius: 16px; overflow: hidden; cursor: pointer; }
.bento-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.bento-overlay { position: absolute; inset: 0; padding: 1.5rem; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)); display: flex; flex-direction: column; justify-content: space-between; }
.bento-overlay h3 { color: white; font-size: 1.5rem; font-weight: 800; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.bento-overlay.clean { background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%); justify-content: flex-end; }
.bento-overlay.clean h4 { color: white; font-size: 1.1rem; font-weight: 700; margin: 0; }
.bento-item:hover img { transform: scale(1.05); }

.bento-item.featured { grid-column: span 2; grid-row: span 2; }
.bento-item.tall { grid-column: span 1; grid-row: span 2; }
.bento-item.wide { grid-column: span 2; grid-row: span 1; }
.bento-item.square { grid-column: span 1; grid-row: span 1; }

@media (max-width: 800px) {
  .bento-gallery { grid-template-columns: repeat(2, 1fr); gap: 1rem;}
  .bento-item.featured { grid-column: span 2; }
  .bento-item.tall { grid-column: span 2; grid-row: span 1; }
  .bento-item.wide { grid-column: span 2; }
  .bento-item.square { grid-column: span 1; }
}

/* 3. Horizontal Carousel */
.carousel-wrapper { width: 100%; }
.carousel-header { padding: 0 3rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
.carousel-track {
  display: flex; gap: 1.5rem; padding: 0 3rem 2rem 3rem; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none;
}
.carousel-track::-webkit-scrollbar { display: none; }
.carousel-item {
  position: relative; flex: 0 0 calc(33.333% - 1rem); min-width: 300px; aspect-ratio: 4/3; border-radius: 16px; overflow: hidden; scroll-snap-align: start; cursor: pointer;
}
.carousel-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1); }
.carousel-overlay {
  position: absolute; inset: 0; background: rgba(15,23,42,0.6); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; opacity: 0; transition: opacity 0.3s ease;
}
.carousel-overlay h4 { color: white; font-size: 1.25rem; font-weight: 700; margin: 0; transform: translateY(20px); transition: transform 0.3s ease; }
.view-btn { background: white; color: #0f172a; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transform: translateY(20px); transition: transform 0.3s ease, background 0.2s; }
.view-btn:hover { background: #e2e8f0; }
.carousel-item:hover img { transform: scale(1.1); }
.carousel-item:hover .carousel-overlay { opacity: 1; }
.carousel-item:hover h4, .carousel-item:hover .view-btn { transform: translateY(0); }

/* Transitions */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
