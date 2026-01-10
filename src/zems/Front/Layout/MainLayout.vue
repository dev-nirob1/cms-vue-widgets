<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SidebarSection from '@/components/Section/SidebarSection.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <div class="app-layout">

    <!-- NAVBAR -->
    <header class="navbar">
      <div class="navbar-left">
        <button class="menu-btn" @click="toggleSidebar">
          ☰
        </button>
      </div>

      <nav class="navbar-center">
        <a href="#">Home</a>
        <a href="#">Components</a>
        <a href="#">Documentation</a>
      </nav>

      <div class="navbar-right">
        <span class="logo">UI Library</span>
      </div>
    </header>

    <!-- BODY -->
    <div class="body">
      <!-- SIDEBAR -->
      <SidebarSection :class="['sidebar', { open: sidebarOpen }]" />

      <!-- CONTENT -->
      <main class="content">
        <RouterView />
      </main>
    </div>

    <!-- BACKDROP -->
    <div v-if="sidebarOpen" class="backdrop" @click="toggleSidebar"></div>

  </div>
</template>
<style scoped>
/* ROOT */
.app-layout {
  min-height: 100vh;
  background: #f9fafb;
}

/* NAVBAR */
.navbar {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-left {
  width: 60px;
}

.menu-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.navbar-center a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
}

.navbar-center a:hover {
  color: var(--primary-color);
}

.navbar-right {
  width: 120px;
  text-align: right;
}

.logo {
  font-weight: 700;
  font-size: 1.1rem;
}

/* BODY */
.body {
  display: flex;
  position: relative;
}

/* SIDEBAR */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: white;
  border-right: 1px solid var(--light-color);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 1.5rem;
}

.sidebar.open {
  transform: translateX(0);
}

/* CONTENT */
.content {
  flex: 1;
  padding: 2rem;
}

/* BACKDROP */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;
}
</style>
