<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const slashCode = `<template>
  <nav aria-label="Breadcrumb">
    <ol class="breadcrumb slash">
      <li><a href="#" class="bc-link">Home</a></li>
      <li><a href="#" class="bc-link">Products</a></li>
      <li><a href="#" class="bc-link">Electronics</a></li>
      <li><span class="bc-current" aria-current="page">Laptops</span></li>
    </ol>
  </nav>
</template>`;

const chevronCode = `<template>
  <nav aria-label="Breadcrumb">
    <ol class="breadcrumb chevron">
      <li>
        <a href="#" class="bc-icon-link">
          <svg class="bc-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span class="sr-only">Home</span>
        </a>
      </li>
      <li>
        <div class="bc-item">
          <svg class="bc-separator" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <a href="#" class="bc-link">Projects</a>
        </div>
      </li>
      <li>
        <div class="bc-item">
          <svg class="bc-separator" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="bc-current" aria-current="page">Project Apollo</span>
        </div>
      </li>
    </ol>
  </nav>
</template>`;

const paginationCode = `<template>
  <nav class="pagination-nav" aria-label="Pagination">
    <div class="pg-info">Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of <span class="font-medium">97</span> results</div>
    <div class="pg-buttons">
      <a href="#" class="pg-arrow disabled">Previous</a>
      <a href="#" class="pg-btn">1</a>
      <a href="#" class="pg-btn active" aria-current="page">2</a>
      <a href="#" class="pg-btn">3</a>
      <span class="pg-dots">...</span>
      <a href="#" class="pg-btn">10</a>
      <a href="#" class="pg-arrow">Next</a>
    </div>
  </nav>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Breadcrumbs & Pagination</h1>
    <p class="page-description">Navigation trails indicating hierarchical page location and controls for navigating multi-page datasets.</p>
  </div>

  <!-- Variant 1: Slash Separator -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Simple Slash Breadcrumbs</SubTitle>
      <button @click="toggle('slash')" class="btn-toggle-code">{{ show['slash'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center">
      <nav aria-label="Breadcrumb" class="bc-card">
        <ol class="breadcrumb slash">
          <li><a href="#" class="bc-link">Home</a></li>
          <li><a href="#" class="bc-link">Products</a></li>
          <li><a href="#" class="bc-link">Electronics</a></li>
          <li><span class="bc-current" aria-current="page">Laptops</span></li>
        </ol>
      </nav>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['slash']" :code="slashCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Chevron Separator -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>SVG Chevron Breadcrumbs</SubTitle>
      <button @click="toggle('chevron')" class="btn-toggle-code">{{ show['chevron'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center dark-bg">
      <nav aria-label="Breadcrumb" class="bc-card dark">
        <ol class="breadcrumb chevron dark">
          <li>
            <a href="#" class="bc-icon-link">
              <svg class="bc-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              <span class="sr-only">Home</span>
            </a>
          </li>
          <li>
            <div class="bc-item">
              <svg class="bc-separator" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <a href="#" class="bc-link">Projects</a>
            </div>
          </li>
          <li>
            <div class="bc-item">
              <svg class="bc-separator" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <a href="#" class="bc-link">Engineering</a>
            </div>
          </li>
          <li>
            <div class="bc-item">
              <svg class="bc-separator" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <span class="bc-current" aria-current="page">Apollo Core</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['chevron']" :code="chevronCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Standalone Pagination -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Standalone Pagination Block</SubTitle>
      <button @click="toggle('pagination')" class="btn-toggle-code">{{ show['pagination'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <nav class="pagination-nav block" aria-label="Pagination">
        <div class="pg-info">Showing <span class="font-medium">11</span> to <span class="font-medium">20</span> of <span class="font-medium">97</span> results</div>
        <div class="pg-buttons">
          <a href="#" class="pg-arrow">Previous</a>
          <a href="#" class="pg-btn">1</a>
          <a href="#" class="pg-btn active" aria-current="page">2</a>
          <a href="#" class="pg-btn">3</a>
          <span class="pg-dots">...</span>
          <a href="#" class="pg-btn">10</a>
          <a href="#" class="pg-arrow">Next</a>
        </div>
      </nav>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['pagination']" :code="paginationCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.flex-center { display: flex; justify-content: center; align-items: center;}
.preview-area.dark-bg { background: #0f172a; border-color: transparent;}

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }
.sr-only { display: none; }
.font-medium { font-weight: 600; color: #0f172a; }

/* Global Breadcrumb Card wrap for centering visually */
.bc-card { display: inline-block; background: white; padding: 1rem 1.5rem; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
.bc-card.dark { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); }

/* Breadcrumb Layouts */
.breadcrumb { margin: 0; padding: 0; list-style: none; display: flex; align-items: center; flex-wrap: wrap; }
.breadcrumb li { display: flex; align-items: center; }

/* 1. Slash Separators */
.breadcrumb.slash li + li::before { content: '/'; margin: 0 0.8rem; color: #cbd5e1; font-weight: 400; }
.bc-link { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.15s; }
.bc-link:hover { color: #0f172a; text-decoration: underline; }
.bc-current { color: #0f172a; font-size: 0.9rem; font-weight: 600; }

/* 2. Chevron Separators */
.bc-item { display: flex; align-items: center; }
.bc-icon-link { color: #94a3b8; transition: color 0.15s; display: flex; align-items: center; }
.bc-icon-link:hover { color: #e2e8f0; }
.bc-icon { width: 18px; height: 18px; }
.bc-separator { width: 20px; height: 20px; color: #475569; margin: 0 0.2rem; flex-shrink: 0; }
.breadcrumb.chevron.dark .bc-link { color: #94a3b8; }
.breadcrumb.chevron.dark .bc-link:hover { color: white; text-decoration: none; }
.breadcrumb.chevron.dark .bc-current { color: white; }

/* 3. Pagination Block */
.pagination-nav.block { display: flex; flex-direction: column; gap: 1rem; width: 100%; max-width: 600px; margin: 0 auto; }
.pg-info { font-size: 0.875rem; color: #64748b; text-align: center; }
.pg-buttons { display: flex; align-items: center; justify-content: center; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); gap: 1px; background: #cbd5e1; border: 1px solid #cbd5e1; overflow: hidden; }
.pg-btn, .pg-arrow, .pg-dots { display: inline-flex; align-items: center; justify-content: center; height: 38px; min-width: 38px; background: white; font-size: 0.875rem; font-weight: 500; color: #475569; text-decoration: none; transition: background 0.15s; }
.pg-arrow { padding: 0 1rem; }
.pg-btn:hover:not(.active), .pg-arrow:hover:not(.disabled) { background: #f8fafc; color: #0f172a; }
.pg-btn.active { background: #4f46e5; color: white; position: relative; z-index: 10; font-weight: 600; }
.pg-arrow.disabled { color: #94a3b8; cursor: not-allowed; }
.pg-dots { color: #94a3b8; cursor: default; }

@media (min-width: 640px) {
  .pagination-nav.block { flex-direction: row; justify-content: space-between; align-items: center; }
  .pg-info { text-align: left; }
}

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
