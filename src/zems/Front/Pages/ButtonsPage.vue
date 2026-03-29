<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const activeCode = ref({});
const toggle = (id) => { activeCode.value[id] = !activeCode.value[id]; };

const solidCode = `<button class="btn btn-solid primary">Primary</button>
<button class="btn btn-solid secondary">Secondary</button>
<button class="btn btn-solid success">Success</button>
<button class="btn btn-solid danger">Danger</button>`;

const outlineCode = `<button class="btn btn-outline primary">Primary</button>
<button class="btn btn-outline secondary">Secondary</button>
<button class="btn btn-outline success">Success</button>
<button class="btn btn-outline danger">Danger</button>`;

const ghostCode = `<button class="btn btn-ghost">Ghost Button</button>
<button class="btn btn-ghost-primary">Ghost Primary</button>`;

const gradientCode = `<button class="btn btn-gradient purple">Purple Gradient</button>
<button class="btn btn-gradient ocean">Ocean Gradient</button>
<button class="btn btn-gradient sunset">Sunset Gradient</button>`;

const iconCode = `<button class="btn btn-icon-left">
  <svg .../>  Icon Left
</button>
<button class="btn btn-icon-right">
  Icon Right <svg .../>
</button>
<button class="btn btn-icon-only"><svg .../></button>`;

const threeDCode = `<button class="btn btn-3d primary">Push Me</button>
<button class="btn btn-3d teal">Push Me</button>
<button class="btn btn-neon">Neon Effect</button>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Buttons</h1>
    <p class="page-description">A comprehensive, accessible button system with multiple variants, sizes, and states.</p>
  </div>

  <!-- Solid Buttons -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Solid Buttons</SubTitle>
      <button @click="toggle('solid')" class="btn-toggle-code">{{ activeCode['solid'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-solid primary">Primary</button>
        <button class="btn-solid secondary">Secondary</button>
        <button class="btn-solid success">Success</button>
        <button class="btn-solid danger">Danger</button>
        <button class="btn-solid dark">Dark</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="activeCode['solid']" :code="solidCode" language="html" /></transition>
  </section>

  <!-- Outline Buttons -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Outline Buttons</SubTitle>
      <button @click="toggle('outline')" class="btn-toggle-code">{{ activeCode['outline'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-outline primary">Primary</button>
        <button class="btn-outline secondary">Secondary</button>
        <button class="btn-outline success">Success</button>
        <button class="btn-outline danger">Danger</button>
        <button class="btn-outline dark">Dark</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="activeCode['outline']" :code="outlineCode" language="html" /></transition>
  </section>

  <!-- Ghost Buttons -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Ghost & Transparent</SubTitle>
      <button @click="toggle('ghost')" class="btn-toggle-code">{{ activeCode['ghost'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-ghost">Ghost Default</button>
        <button class="btn-ghost indigo">Ghost Indigo</button>
        <button class="btn-ghost teal">Ghost Teal</button>
        <button class="btn-pill">Pill Shape</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="activeCode['ghost']" :code="ghostCode" language="html" /></transition>
  </section>

  <!-- Gradient Buttons -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Gradient Buttons</SubTitle>
      <button @click="toggle('gradient')" class="btn-toggle-code">{{ activeCode['gradient'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-gradient purple">Purple Haze</button>
        <button class="btn-gradient ocean">Ocean Wave</button>
        <button class="btn-gradient sunset">Sunset Glow</button>
        <button class="btn-gradient rose">Rose Garden</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="activeCode['gradient']" :code="gradientCode" language="html" /></transition>
  </section>

  <!-- Icon Buttons -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Icon Buttons</SubTitle>
      <button @click="toggle('icon')" class="btn-toggle-code">{{ activeCode['icon'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-with-icon left solid-indigo">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Learn More
        </button>
        <button class="btn-with-icon right solid-teal">
          Download
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </button>
        <button class="btn-icon-only">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <button class="btn-icon-only teal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="activeCode['icon']" :code="iconCode" language="html" /></transition>
  </section>

  <!-- 3D & Special Effects -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>3D & Special Effects</SubTitle>
      <button @click="toggle('3d')" class="btn-toggle-code">{{ activeCode['3d'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-3d indigo">Push Me</button>
        <button class="btn-3d teal">Push Me</button>
        <button class="btn-3d rose">Push Me</button>
        <button class="btn-neon">Neon Glow</button>
        <button class="btn-magnetic">Magnetic ✦</button>
      </div>
    </div>
    <div class="effects-note">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      Hover over these buttons to see the 3D push and glow effects in action.
    </div>
    <transition name="slide"><CodeSnippet v-if="activeCode['3d']" :code="threeDCode" language="html" /></transition>
  </section>

  <!-- Sizes -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Button Sizes</SubTitle>
    </div>
    <div class="preview-area">
      <div class="btn-row align-center">
        <button class="btn-solid primary xs">XSmall</button>
        <button class="btn-solid primary sm">Small</button>
        <button class="btn-solid primary md">Medium</button>
        <button class="btn-solid primary lg">Large</button>
        <button class="btn-solid primary xl">XLarge</button>
      </div>
    </div>
  </section>

  <!-- States -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>States</SubTitle>
    </div>
    <div class="preview-area">
      <div class="btn-row">
        <button class="btn-solid primary">Normal</button>
        <button class="btn-solid primary" disabled>Disabled</button>
        <button class="btn-loading">
          <span class="spinner"></span> Loading...
        </button>
        <button class="btn-success-state">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Done!
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section {
  background: white; border-radius: 16px; padding: 2rem;
  margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm);
}

.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }

.preview-area {
  padding: 2rem 2.5rem; background: #f8fafc;
  border-radius: 12px; border: 1px dashed #cbd5e1;
}

.btn-row {
  display: flex; flex-wrap: wrap; gap: 1rem; align-items: flex-start;
}

.btn-row.align-center { align-items: center; }

.btn-toggle-code {
  background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color);
  padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem;
  cursor: pointer; transition: all 0.2s;
}
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* BASE */
[class*="btn-"] { cursor: pointer; font-family: inherit; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; border: none; border-radius: 10px; padding: 0.75rem 1.5rem; font-size: 0.95rem; transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }

/* SOLID */
.btn-solid { border-radius: 10px; }
.btn-solid.primary { background: var(--primary-color); color: white; }
.btn-solid.primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(79,70,229,0.3); }
.btn-solid.secondary { background: var(--secondary-color); color: white; }
.btn-solid.secondary:hover { background: #0b7a70; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(13,148,136,0.3); }
.btn-solid.success { background: #22c55e; color: white; }
.btn-solid.success:hover { background: #16a34a; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(34,197,94,0.3); }
.btn-solid.danger { background: #ef4444; color: white; }
.btn-solid.danger:hover { background: #dc2626; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(239,68,68,0.3); }
.btn-solid.dark { background: #0f172a; color: white; }
.btn-solid.dark:hover { background: #1e293b; transform: translateY(-2px); }

/* SIZES */
.btn-solid.xs { padding: 0.3rem 0.75rem; font-size: 0.78rem; border-radius: 6px; }
.btn-solid.sm { padding: 0.5rem 1rem; font-size: 0.85rem; border-radius: 8px; }
.btn-solid.md { padding: 0.75rem 1.5rem; }
.btn-solid.lg { padding: 0.9rem 2rem; font-size: 1rem; }
.btn-solid.xl { padding: 1.1rem 2.5rem; font-size: 1.1rem; border-radius: 14px; }

/* OUTLINE */
.btn-outline { background: transparent; }
.btn-outline.primary { border: 2px solid var(--primary-color); color: var(--primary-color); }
.btn-outline.primary:hover { background: var(--primary-color); color: white; transform: translateY(-2px); }
.btn-outline.secondary { border: 2px solid var(--secondary-color); color: var(--secondary-color); }
.btn-outline.secondary:hover { background: var(--secondary-color); color: white; transform: translateY(-2px); }
.btn-outline.success { border: 2px solid #22c55e; color: #22c55e; }
.btn-outline.success:hover { background: #22c55e; color: white; transform: translateY(-2px); }
.btn-outline.danger { border: 2px solid #ef4444; color: #ef4444; }
.btn-outline.danger:hover { background: #ef4444; color: white; transform: translateY(-2px); }
.btn-outline.dark { border: 2px solid #0f172a; color: #0f172a; }
.btn-outline.dark:hover { background: #0f172a; color: white; transform: translateY(-2px); }

/* GHOST */
.btn-ghost { background: rgba(15,23,42,0.05); color: var(--text-main); border: none; }
.btn-ghost:hover { background: rgba(15,23,42,0.1); transform: translateY(-2px); }
.btn-ghost.indigo { background: rgba(79,70,229,0.08); color: var(--primary-color); }
.btn-ghost.indigo:hover { background: rgba(79,70,229,0.15); transform: translateY(-2px); }
.btn-ghost.teal { background: rgba(13,148,136,0.08); color: var(--secondary-color); }
.btn-ghost.teal:hover { background: rgba(13,148,136,0.15); transform: translateY(-2px); }
.btn-pill { background: var(--primary-color); color: white; border-radius: 99px; }
.btn-pill:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(79,70,229,0.3); }

/* GRADIENT */
.btn-gradient { color: white; border-radius: 12px; }
.btn-gradient.purple { background: linear-gradient(135deg, #6366f1, #a855f7); }
.btn-gradient.purple:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(139,92,246,0.4); }
.btn-gradient.ocean { background: linear-gradient(135deg, #0ea5e9, #14b8a6); }
.btn-gradient.ocean:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(14,165,233,0.4); }
.btn-gradient.sunset { background: linear-gradient(135deg, #f97316, #ef4444); }
.btn-gradient.sunset:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(249,115,22,0.4); }
.btn-gradient.rose { background: linear-gradient(135deg, #ec4899, #f43f5e); }
.btn-gradient.rose:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(236,72,153,0.4); }

/* ICON BUTTONS */
.btn-with-icon { border-radius: 10px; padding: 0.75rem 1.4rem; }
.btn-with-icon.solid-indigo { background: var(--primary-color); color: white; }
.btn-with-icon.solid-indigo:hover { background: var(--primary-dark); transform: translateY(-2px); }
.btn-with-icon.solid-teal { background: var(--secondary-color); color: white; }
.btn-with-icon.solid-teal:hover { background: #0b7a70; transform: translateY(-2px); }

.btn-icon-only { width: 44px; height: 44px; padding: 0; justify-content: center; border-radius: 12px; background: var(--light-color); color: var(--text-main); }
.btn-icon-only:hover { background: var(--primary-color); color: white; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(79,70,229,0.3); }
.btn-icon-only.teal { background: rgba(13,148,136,0.1); color: var(--secondary-color); }
.btn-icon-only.teal:hover { background: var(--secondary-color); color: white; transform: translateY(-2px); }

/* 3D BUTTONS */
.btn-3d {
  color: white; border-radius: 12px; padding: 0.8rem 2rem;
  position: relative; border: none;
  transform: translateY(0);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.btn-3d.indigo {
  background: linear-gradient(180deg, #6366f1 0%, #4f46e5 100%);
  box-shadow: 0 8px 0 #3730a3, 0 12px 20px rgba(79,70,229,0.3);
}
.btn-3d.indigo:hover {
  transform: translateY(3px);
  box-shadow: 0 4px 0 #3730a3, 0 6px 12px rgba(79,70,229,0.25);
}
.btn-3d.indigo:active {
  transform: translateY(8px);
  box-shadow: 0 0 0 #3730a3, 0 2px 6px rgba(79,70,229,0.2);
}
.btn-3d.teal {
  background: linear-gradient(180deg, #14b8a6 0%, #0d9488 100%);
  box-shadow: 0 8px 0 #0f766e, 0 12px 20px rgba(13,148,136,0.3);
}
.btn-3d.teal:hover {
  transform: translateY(3px);
  box-shadow: 0 4px 0 #0f766e, 0 6px 12px rgba(13,148,136,0.25);
}
.btn-3d.teal:active { transform: translateY(8px); box-shadow: 0 0 0 #0f766e; }
.btn-3d.rose {
  background: linear-gradient(180deg, #fb7185 0%, #f43f5e 100%);
  box-shadow: 0 8px 0 #be123c, 0 12px 20px rgba(244,63,94,0.3);
}
.btn-3d.rose:hover {
  transform: translateY(3px);
  box-shadow: 0 4px 0 #be123c, 0 6px 12px rgba(244,63,94,0.25);
}
.btn-3d.rose:active { transform: translateY(8px); box-shadow: 0 0 0 #be123c; }

/* NEON */
.btn-neon {
  background: transparent;
  border: 2px solid #14b8a6;
  color: #14b8a6;
  border-radius: 10px; padding: 0.75rem 2rem;
  letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem;
  transition: all 0.3s ease;
}
.btn-neon:hover {
  background: #14b8a6;
  color: white;
  box-shadow: 0 0 20px rgba(20,184,166,0.6), inset 0 0 20px rgba(20,184,166,0.15);
  transform: translateY(-2px);
}

/* MAGNETIC */
.btn-magnetic {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white; border-radius: 10px; padding: 0.75rem 2rem;
  letter-spacing: 0.05em; transition: all 0.3s ease;
}
.btn-magnetic:hover {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 16px 40px rgba(15,23,42,0.3);
  background: linear-gradient(135deg, #334155, #475569);
}

/* STATES */
.btn-solid:disabled {
  opacity: 0.45; cursor: not-allowed; transform: none !important; box-shadow: none !important;
}

.btn-loading {
  background: var(--primary-color); color: white;
  border-radius: 10px; padding: 0.75rem 1.5rem; opacity: 0.8; cursor: wait;
}
.spinner {
  width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white; border-radius: 50%;
  animation: spin 0.7s linear infinite; display: inline-block;
}
@keyframes spin { to { transform: rotate(360deg); } }

.btn-success-state {
  background: #22c55e; color: white;
  border-radius: 10px; padding: 0.75rem 1.5rem;
}

/* Effects Note */
.effects-note {
  display: flex; align-items: center; gap: 0.5rem; margin-top: 1.5rem;
  color: var(--text-muted); font-size: 0.875rem;
}

/* Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 500px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
