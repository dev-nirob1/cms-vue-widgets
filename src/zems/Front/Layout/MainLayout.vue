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
    <!-- NAVBAR -->
    <header :class="['navbar', 'glass', { scrolled: isScrolled }]">
      <div class="navbar-container">
        <div class="navbar-left">
          <button class="menu-btn" @click="toggleSidebar" aria-label="Toggle Sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div class="logo-wrapper">
            <div class="logo-icon"></div>
            <span class="logo-text">Zems<span class="text-primary">UI</span></span>
          </div>
        </div>

        <nav class="navbar-center hide-mobile">
          <RouterLink to="/components" class="nav-link" active-class="active">Components</RouterLink>
          <RouterLink to="/installation" class="nav-link" active-class="active">Guide</RouterLink>
          <a href="#" class="nav-link">Resources</a>
        </nav>

        <div class="navbar-right">
          <div class="search-wrapper hide-mobile">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search components..." class="search-input">
          </div>
          <a href="https://github.com" target="_blank" class="github-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </header>

    <!-- BODY -->
    <div class="layout-body">
      <!-- SIDEBAR -->
      <aside :class="['sidebar-wrapper', { open: sidebarOpen }]">
        <SidebarSection />
      </aside>

      <!-- CONTENT -->
      <main class="main-content">
        <div class="content-container">
          <RouterView />
        </div>
        
        <footer class="content-footer">
          <p>&copy; 2026 Zems UI Components. Built with Vue & Passion.</p>
        </footer>
      </main>
    </div>

    <!-- BACKDROP -->
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
  background-color: var(--body-bg);
}

/* NAVBAR */
.navbar {
  height: 72px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  height: 64px;
  border-bottom-color: var(--glass-border);
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
}

.logo-text {
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  color: var(--dark-color);
}

.text-primary {
  color: var(--primary-color);
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-main);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
}

.menu-btn:hover {
  background: var(--light-color);
}

/* NAVBAR CENTER */
.navbar-center {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary-color);
}

.nav-link.active {
  background: rgba(79, 70, 229, 0.05);
}

/* NAVBAR RIGHT */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.search-wrapper {
  position: relative;
  width: 240px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  background: var(--light-color);
  border: 1px solid transparent;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  transition: all 0.2s;
  margin: 0;
}

.search-input:focus {
  outline: none;
  background: white;
  border-color: var(--primary-light);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
}

.github-link {
  color: var(--text-muted);
  transition: color 0.2s;
}

.github-link:hover {
  color: var(--dark-color);
}

/* BODY */
.layout-body {
  display: flex;
  flex: 1;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

/* SIDEBAR */
.sidebar-wrapper {
  width: 280px;
  position: sticky;
  top: 72px;
  height: calc(100vh - 72px);
  overflow-y: auto;
  border-right: 1px solid var(--light-color);
  padding: 1.5rem 0;
  background: white;
  z-index: 90;
}

/* CONTENT */
.main-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.content-container {
  padding: 2.5rem;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
}

.content-footer {
  padding: 2rem 2.5rem;
  border-top: 1px solid var(--light-color);
  color: var(--text-muted);
  font-size: 0.9rem;
  text-align: center;
}

/* BACKDROP */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 95;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .sidebar-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }

  .sidebar-wrapper.open {
    transform: translateX(0);
  }

  .menu-btn {
    display: flex;
  }
  
  .hide-mobile {
    display: none;
  }
}

@media (max-width: 640px) {
  .content-container {
    padding: 1.5rem;
  }
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
