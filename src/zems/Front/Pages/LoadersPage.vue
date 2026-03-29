<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const loadersCode = `<template>
  <div class="loader-group">
    <!-- Standard Spinner -->
    <div class="spinner"></div>
    
    <!-- Colored Spinner -->
    <div class="spinner primary"></div>
    
    <!-- Bouncing Dots -->
    <div class="bouncing-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>`;

const skeletonCode = `<template>
  <div class="skeleton-card">
    <!-- Header Block -->
    <div class="sk-header">
      <div class="sk-avatar pulse"></div>
      <div class="sk-title-group">
        <div class="sk-line w-40 pulse"></div>
        <div class="sk-line w-24 sm pulse"></div>
      </div>
    </div>
    
    <!-- Body Block -->
    <div class="sk-body">
      <div class="sk-line pulse"></div>
      <div class="sk-line pulse"></div>
      <div class="sk-line w-80 pulse"></div>
      
      <div class="sk-box pulse mt-4"></div>
    </div>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Loading States</h1>
    <p class="page-description">Spinners, animated dots, and skeleton wireframes used to communicate that data is being fetched.</p>
  </div>

  <!-- Variant 1: Spinners & Dots -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Active Loaders</SubTitle>
      <button @click="toggle('loaders')" class="btn-toggle-code">{{ show['loaders'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center gap-wrap">
      
      <!-- Basic Spinners -->
      <div class="loader-box">
        <div class="spinner"></div>
        <span>Default</span>
      </div>

      <div class="loader-box">
        <div class="spinner primary"></div>
        <span>Primary</span>
      </div>

      <!-- Bouncing Dots -->
      <div class="loader-box">
        <div class="bouncing-dots">
          <div class="b-dot"></div>
          <div class="b-dot"></div>
          <div class="b-dot"></div>
        </div>
        <span>Processing</span>
      </div>

    </div>
    <transition name="slide"><CodeSnippet v-if="show['loaders']" :code="loadersCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Skeleton States -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Skeleton Wireframes</SubTitle>
      <button @click="toggle('skeleton')" class="btn-toggle-code">{{ show['skeleton'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center dark-bg">
      
      <div class="skeleton-card">
        <!-- Avatar Header -->
        <div class="sk-header">
          <div class="sk-avatar pulse"></div>
          <div class="sk-title-group">
            <div class="sk-line w-40 pulse"></div>
            <div class="sk-line w-24 sm pulse"></div>
          </div>
        </div>
        
        <!-- Text Block -->
        <div class="sk-body">
          <div class="sk-line pulse"></div>
          <div class="sk-line pulse"></div>
          <div class="sk-line w-80 pulse"></div>
          <div class="sk-box pulse mt-4"></div>
        </div>
      </div>

    </div>
    <transition name="slide"><CodeSnippet v-if="show['skeleton']" :code="skeletonCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 4rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.flex-center { display: flex; justify-content: center; align-items: center;}
.preview-area.gap-wrap { gap: 3rem; flex-wrap: wrap;}
.preview-area.dark-bg { background: #0f172a; border-color: transparent;}

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* 1. Spinners & Dots */
.loader-box { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; padding: 2rem; min-width: 150px; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.loader-box span { font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }

.spinner { width: 32px; height: 32px; border: 3px solid #e2e8f0; border-top-color: #64748b; border-radius: 50%; animation: spin 0.8s linear infinite; }
.spinner.primary { border-top-color: #4f46e5; }
@keyframes spin { 100% { transform: rotate(360deg); } }

.bouncing-dots { display: flex; gap: 0.4rem; align-items: center; height: 32px; }
.b-dot { width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; }
.b-dot:nth-child(1) { animation-delay: -0.32s; }
.b-dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
  40% { transform: scale(1); opacity: 1; }
}

/* 2. Skeleton Skeletons */
.skeleton-card { width: 100%; max-width: 450px; background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.sk-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.sk-avatar { width: 48px; height: 48px; border-radius: 50%; background-color: #e2e8f0; }
.sk-title-group { display: flex; flex-direction: column; gap: 0.5rem; width: 100%; }

.sk-line { height: 12px; border-radius: 8px; background-color: #e2e8f0; width: 100%; }
.sk-line.sm { height: 8px; }
.sk-line.w-80 { width: 80%; }
.sk-line.w-40 { width: 40%; }
.sk-line.w-24 { width: 24%; }

.sk-body { display: flex; flex-direction: column; gap: 0.6rem; }
.sk-box { width: 100%; height: 120px; border-radius: 8px; background-color: #e2e8f0; }
.mt-4 { margin-top: 1rem; }

/* The actual skeleton wave animation */
.pulse {
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
  background-size: 200% 100%;
  animation: bg-pulse 1.5s infinite linear;
}

@keyframes bg-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
