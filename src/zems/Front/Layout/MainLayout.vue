<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import SidebarSection from '@/components/Section/SidebarSection.vue'

const sidebarOpen = ref(false)
const isScrolled = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-layout">
    <!-- NAVBAR PREMIUM -->
    <header :class="['navbar', { scrolled: isScrolled }]">
      <div class="navbar-container">
        <!-- Logo & Mobile Menu -->
        <div class="navbar-left">
          <button class="menu-btn" @click="toggleSidebar" aria-label="Toggle Sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          
          <RouterLink to="/" class="logo-wrapper">
            <div class="logo-icon">
              <!-- Geometric Logo -->
              <svg viewBox="0 0 24 24" fill="none" class="brand-svg"><path d="M4 11L12 4L20 11V20H4V11Z" fill="var(--primary-color)" fill-opacity="0.2" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4L12 20M4 11L20 11" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <span class="logo-text">PureVue</span>
          </RouterLink>

          <!-- Top Links -->
          <nav class="navbar-links hide-mobile">
            <RouterLink to="/components" class="nav-link" active-class="active">Components</RouterLink>
            <a href="#" class="nav-link">Blocks</a>
            <a href="#" class="nav-link">Templates</a>
          </nav>
        </div>

        <!-- Utility Right -->
        <div class="navbar-right">
          <!-- Command K Search Bar -->
          <div class="search-command hide-mobile">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span class="search-text">Quick search...</span>
            <kbd class="shortcut">Ctrl K</kbd>
          </div>

          <div class="divider hide-mobile"></div>

          <!-- Github Icon -->
          <a href="https://github.com" target="_blank" class="icon-link" aria-label="GitHub Repository">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
          </a>
        </div>
      </div>
    </header>

    <!-- MAIN BODY GRID -->
    <div class="layout-body">
      <!-- Left Sidebar (Navigation) -->
      <aside :class="['sidebar-left', { open: sidebarOpen }]">
        <SidebarSection />
      </aside>

      <!-- Center Main Content -->
      <main class="page-content">
        <div class="container-center">
          <RouterView />
        </div>
        
        <footer class="site-footer">
          <div class="footer-meta">
            <p>&copy; 2026 PureVue Components</p>
            <p class="built-with">Built with Vue. Tailwind-inspired.</p>
          </div>
        </footer>
      </main>
    </div>

    <!-- Mobile Backdrop -->
    <transition name="fade">
      <div v-if="sidebarOpen" class="backdrop" @click="toggleSidebar"></div>
    </transition>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff; /* Premium white */
  color: #0f172a;
}

/* ============================
   FROSTED NAVBAR (Tailwind Style)
   ============================ */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.85); /* Slightly translucent */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #f1f5f9;
  transition: box-shadow 0.2s;
}

.navbar.scrolled {
  box-shadow: 0 1px 3px rgba(0,0,0,0.05); /* Very faint shadow */
  border-bottom-color: rgba(15, 23, 42, 0.05);
}

.navbar-container {
  max-width: 90rem; /* ~1440px standard max width */
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-left, .navbar-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Branding */
.logo-wrapper {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-right: 1.5rem;
}

.logo-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-svg {
  width: 100%;
  height: 100%;
}

.logo-text {
  font-weight: 800;
  font-size: 1.25rem;
  color: #0f172a;
  letter-spacing: -0.05em; /* Extremely tight typography */
}

/* Nav Links */
.navbar-links {
  display: flex;
  gap: 1rem;
  border-left: 1px solid #e2e8f0;
  padding-left: 1.5rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: #0f172a;
}

/* Right Search Mock */
.search-command {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.6rem 0.4rem 0.75rem;
  border-radius: 8px;
  cursor: text;
  color: #94a3b8;
  width: 200px;
  transition: border-color 0.2s;
}

.search-command:hover {
  border-color: #cbd5e1;
}

.search-text {
  font-size: 0.875rem;
  font-weight: 400;
  flex: 1;
}

.shortcut {
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  font-size: 0.65rem;
  font-family: inherit;
  font-weight: 600;
  color: #64748b;
  box-shadow: inset 0 -1px 0 #e2e8f0;
}

.divider { width: 1px; height: 24px; background-color: #e2e8f0; }

.icon-link { color: #64748b; transition: color 0.2s; display: flex; }
.icon-link:hover { color: #0f172a; }

.menu-btn {
  display: none;
  background: none;
  border: none;
  color: #475569;
  padding: 0;
  cursor: pointer;
}

/* ============================
   BODY LAYOUT GRID (3 COMPONENT)
   ============================ */
.layout-body {
  display: flex;
  flex: 1;
  max-width: 90rem; /* ~1440px */
  width: 100%;
  margin: 0 auto;
}

/* 1. Left Navigation */
.sidebar-left {
  width: 18rem; /* 288px */
  flex-shrink: 0;
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  overflow-y: auto;
  padding-top: 2.5rem; /* Heavy top padding */
  border-right: 1px solid #f1f5f9;
  background: white; /* No weird grey backgrounds */
  z-index: 50;
  /* hide scrollbar */
  scrollbar-width: thin;
}

/* 2. Center Content */
.page-content {
  flex: 1;
  min-width: 0; /* Prevents flexbox text overflow bleeding */
  padding: 0 5rem; /* Extensive padding for a thin center reading line */
  display: flex;
  flex-direction: column;
}

.container-center {
  max-width: 65rem; /* Larger max width since sidebar is gone */
  width: 100%;
  margin: 0 auto;
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.site-footer {
  border-top: 1px solid #e2e8f0;
  padding: 2.5rem 0;
  margin-top: auto;
}

.footer-inner {
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #94a3b8;
}

.footer-inner p { margin: 0; }

/* ============================
   RESPONSIVENESS
   ============================ */

/* Medium Devices (Tablets) */
@media (max-width: 1200px) {
  .page-content { padding: 0 3rem; }
}

/* Small Devices (Mobile) */
@media (max-width: 1024px) {
  .sidebar-left {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 200;
    padding-top: 1rem;
  }
  .sidebar-left.open { transform: translateX(0); }
  
  .hide-mobile { display: none; }
  .menu-btn { display: block; }

  .page-content { padding: 0 1rem; }
  .footer-inner { flex-direction: column; gap: 0.5rem; text-align: center;}
}

/* Backdrop Overlay */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 150;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
