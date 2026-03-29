<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const tooltipCode = `<template>
  <div class="tooltip-demo">
    <!-- Top Tooltip -->
    <button class="tt-btn" data-tooltip="View your profile" data-tt-pos="top">
      Hover Top
    </button>
    
    <!-- Right Tooltip -->
    <button class="tt-btn" data-tooltip="Action successful" data-tt-pos="right">
      Hover Right
    </button>
    
    <!-- Bottom Tooltip -->
    <button class="tt-btn" data-tooltip="Download report" data-tt-pos="bottom">
      Hover Bottom
    </button>
  </div>
</template>

<style>
/* 
  Pure CSS Tooltips using [data-tooltip] attributes 
  and ::after / ::before pseudo elements for the bubble & arrow. 
*/
</style>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Tooltips & Popovers</h1>
    <p class="page-description">Floating contextual information bubbles triggered cleanly on hover using pure CSS Data-Attributes.</p>
  </div>

  <section class="component-section" style="overflow: visible; z-index: 50; position: relative;">
    <div class="section-header">
      <SubTitle>Pure CSS Data-Attribute Tooltips</SubTitle>
      <button @click="toggle('tt')" class="btn-toggle-code">{{ show['tt'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    
    <div class="preview-area flex-center gap-wrap">
      
      <!-- Component -->
      <button class="tt-btn" data-tooltip="View your main dashboard" data-tt-pos="top">
        Hover Top
      </button>

      <button class="tt-btn" data-tooltip="Export as CSV" data-tt-pos="right">
        Hover Right
      </button>

      <button class="tt-btn" data-tooltip="Update profile settings" data-tt-pos="bottom">
        Hover Bottom
      </button>

      <button class="tt-btn" data-tooltip="Delete this repository" data-tt-pos="left">
        Hover Left
      </button>
      
    </div>
    <transition name="slide"><CodeSnippet v-if="show['tt']" :code="tooltipCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 5rem 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.flex-center { display: flex; justify-content: center; align-items: center;}
.preview-area.gap-wrap { gap: 2.5rem; flex-wrap: wrap;}

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* Demo Button Basic Styles */
.tt-btn { background: white; border: 1px solid #cbd5e1; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; color: #334155; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.tt-btn:hover { background: #f8fafc; border-color: #94a3b8; color: #0f172a;}


/* 
  ===========================================
  🔥 PURE CSS TOOLTIPS USING DATA ATTRIBUTES
  ===========================================
*/
[data-tooltip] { position: relative; }

/* The Floating Bubble */
[data-tooltip]::before {
  content: attr(data-tooltip);
  position: absolute;
  background-color: #1e293b;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: opacity 0.2s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 100;
}

/* The Triangle Arrow */
[data-tooltip]::after {
  content: '';
  position: absolute;
  border: 5px solid transparent;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 100;
}


/* TOP (Default Setup) */
[data-tt-pos="top"]::before { bottom: 100%; left: 50%; transform: translate(-50%, -10px); }
[data-tt-pos="top"]::after { bottom: 100%; left: 50%; transform: translate(-50%, -5px); border-top-color: #1e293b; }
[data-tt-pos="top"]:hover::before { transform: translate(-50%, -5px); opacity: 1; visibility: visible; }
[data-tt-pos="top"]:hover::after { transform: translate(-50%, 0); opacity: 1; visibility: visible; }

/* BOTTOM */
[data-tt-pos="bottom"]::before { top: 100%; left: 50%; transform: translate(-50%, 10px); }
[data-tt-pos="bottom"]::after { top: 100%; left: 50%; transform: translate(-50%, 5px); border-bottom-color: #1e293b; }
[data-tt-pos="bottom"]:hover::before { transform: translate(-50%, 5px); opacity: 1; visibility: visible; }
[data-tt-pos="bottom"]:hover::after { transform: translate(-50%, 0); opacity: 1; visibility: visible; }

/* RIGHT */
[data-tt-pos="right"]::before { top: 50%; left: 100%; transform: translate(10px, -50%); }
[data-tt-pos="right"]::after { top: 50%; left: 100%; transform: translate(5px, -50%); border-right-color: #1e293b; }
[data-tt-pos="right"]:hover::before { transform: translate(5px, -50%); opacity: 1; visibility: visible; }
[data-tt-pos="right"]:hover::after { transform: translate(0, -50%); opacity: 1; visibility: visible; }

/* LEFT */
[data-tt-pos="left"]::before { top: 50%; right: 100%; transform: translate(-10px, -50%); }
[data-tt-pos="left"]::after { top: 50%; right: 100%; transform: translate(-5px, -50%); border-left-color: #1e293b; }
[data-tt-pos="left"]:hover::before { transform: translate(-5px, -50%); opacity: 1; visibility: visible; }
[data-tt-pos="left"]:hover::after { transform: translate(0, -50%); opacity: 1; visibility: visible; }


.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
