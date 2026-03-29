<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', path: '/', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332-4.5 1.253' },
      { name: 'Guide', path: '/installation', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
    ]
  },
  {
    title: 'Components',
    items: [
      { name: 'Accordion', path: '/accordion', icon: 'M19 9l-7 7-7-7' },
      { name: 'Button', path: '/button', icon: 'M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
      { name: 'Cards', path: '/cards', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z' },
      { name: 'Form', path: '/form', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { name: 'Gallery', path: '/gallery', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { name: 'Modal', path: '/modal', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
      { name: 'Navbar', path: '/navbar', icon: 'M4 6h16M4 12h16m-7 6h7' },
      { name: 'Footer', path: '/footer', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1' },
    ]
  }
];

const isActive = (path) => route.path === path;
</script>

<template>
  <nav class="sidebar-nav">
    <div v-for="section in navigation" :key="section.title" class="nav-section">
      <h3 class="section-title">{{ section.title }}</h3>
      <ul class="nav-list">
        <li v-for="item in section.items" :key="item.name">
          <RouterLink 
            :to="item.path" 
            :class="['nav-item', { active: isActive(item.path) }]"
          >
            <div class="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="item.icon" />
              </svg>
            </div>
            <span class="item-name">{{ item.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.sidebar-nav {
  padding: 0 1.25rem;
}

.nav-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  padding-left: 0.75rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  text-decoration: none;
  color: var(--text-main);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover {
  background-color: var(--light-color);
  color: var(--primary-color);
  transform: translateX(4px);
}

.nav-item.active {
  background-color: rgba(79, 70, 229, 0.1);
  color: var(--primary-color);
  font-weight: 600;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: white;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s;
  color: var(--text-muted);
}

.nav-item:hover .icon-box,
.nav-item.active .icon-box {
  color: var(--primary-color);
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.1);
}

.nav-item.active .icon-box {
  background: white;
}
</style>
