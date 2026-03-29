<script setup>
import { RouterLink } from 'vue-router';

// Definition of all available components
const components = [
  { name: 'Accordion', path: '/accordion', desc: 'Vertically collapsing text panels for FAQs.', icon: 'M19 9l-7 7-7-7', color: '#3b82f6' },
  { name: 'Alerts', path: '/alerts', desc: 'Contextual feedback messages for user actions.', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#ef4444' },
  { name: 'Badges', path: '/badges', desc: 'Status indicators, dot alerts, and avatar stacks.', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z', color: '#0ea5e9' },
  { name: 'Breadcrumbs', path: '/breadcrumbs', desc: 'Directory trails and numerical data pagination.', icon: 'M13.73 21a2 2 0 01-3.46 0l-3.23-5.6a2 2 0 010-2l6.98-12.08a2 2 0 113.46 2L10.5 15.4l3.23 5.6z', color: '#8b5cf6' },
  { name: 'Buttons', path: '/button', desc: 'Interactive elements for form submissions and links.', icon: 'M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z', color: '#10b981' },
  { name: 'Cards', path: '/cards', desc: 'Flexible containers for data and interactive images.', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z', color: '#f59e0b' },
  { name: 'Dropdowns', path: '/dropdowns', desc: 'Contextual floating popovers and selectors.', icon: 'M19 9l-7 7-7-7', color: '#2dd4bf' },
  { name: 'Footer', path: '/footer', desc: 'Bottom-level page layout patterns.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1', color: '#64748b' },
  { name: 'Forms', path: '/form', desc: 'Input fields, layouts, and data collection groups.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: '#f97316' },
  { name: 'Gallery', path: '/gallery', desc: 'Grids, carousels, and masonry layouts.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', color: '#ec4899' },
  { name: 'Loaders', path: '/loaders', desc: 'Animated spinners and pulsing skeleton layouts.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: '#14b8a6' },
  { name: 'Modals', path: '/modal', desc: 'Dialogs, drawers, and lightbox pop-up overlays.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: '#06b6d4' },
  { name: 'Navbar', path: '/navbar', desc: 'Top-level navigation routing shells.', icon: 'M4 6h16M4 12h16m-7 6h7', color: '#6366f1' },
  { name: 'Steps', path: '/steps', desc: 'Horizontal wizards and vertical progression timelines.', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '#d946ef' },
  { name: 'Tables', path: '/tables', desc: 'Data grids mapped for users and scalable financials.', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', color: '#14b8a6' },
  { name: 'Tabs', path: '/tabs', desc: 'Interactive content switching container blocks.', icon: 'M4 6h16v12H4z M4 10h16 M10 6v4', color: '#8b5cf6' },
  { name: 'Tooltips', path: '/tooltips', desc: 'Lightweight context bubbles and action wrappers.', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', color: '#f87171' }
];

</script>

<template>
  <div class="page-header">
    <h1 class="page-title">All Components</h1>
    <p class="page-description">Browse our collection of premium, customizable Vue 3 components designed for modern web applications.</p>
  </div>

  <div class="components-grid">
    <RouterLink v-for="comp in components" :key="comp.name" :to="comp.path" class="comp-card">
      <div class="comp-icon" :style="{ color: comp.color, backgroundColor: comp.color + '1A' }">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" :d="comp.icon" />
        </svg>
      </div>
      <div class="comp-content">
        <h3>{{ comp.name }}</h3>
        <p>{{ comp.desc }}</p>
      </div>
      <div class="comp-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  padding-bottom: 4rem;
}

.comp-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem;
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s cubic-bezier(0.1, 0, 0, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.comp-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 16px 24px -10px rgba(79, 70, 229, 0.15);
}

.comp-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s;
}

.comp-card:hover .comp-icon {
  transform: scale(1.05) rotate(-2deg);
}

.comp-content {
  flex: 1;
}

.comp-content h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.4rem 0;
}

.comp-content p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.comp-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.25s;
  align-self: center;
}

.comp-card:hover .comp-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--primary-color);
}

@media(max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
}
</style>
