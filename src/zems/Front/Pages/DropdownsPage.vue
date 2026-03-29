<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

// Click Dropdown State
const isProfileOpen = ref(false);
const isOptionsOpen = ref(false);
const profileRef = ref(null);
const optionsRef = ref(null);

// Close clicking outside
const handleClickOutside = (event) => {
  if (profileRef.value && !profileRef.value.contains(event.target)) {
    isProfileOpen.value = false;
  }
  if (optionsRef.value && !optionsRef.value.contains(event.target)) {
    isOptionsOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});


const clickCode = `<template>
  <div class="dropdown-container" ref="profileRef">
    <!-- Trigger Button -->
    <button @click="isProfileOpen = !isProfileOpen" class="dd-trigger user">
      <img src="..." class="avatar" />
      <span class="sr-only">Open user menu</span>
    </button>
    
    <!-- Dropdown Menu -->
    <Transition name="dropdown-fade">
      <div v-show="isProfileOpen" class="dd-menu profile-menu">
        <div class="dd-header">
          <p class="name">Jane Doe</p>
          <p class="email">jane@nexus.io</p>
        </div>
        <div class="dd-divider"></div>
        <a href="#" class="dd-item">Your Profile</a>
        <a href="#" class="dd-item">Settings</a>
        <div class="dd-divider"></div>
        <a href="#" class="dd-item danger">Sign out</a>
      </div>
    </Transition>
  </div>
</template>`;

const hoverCode = `<template>
  <div class="dropdown-hover-group">
    <!-- Trigger Button -->
    <button class="dd-trigger text-btn">
      Features
      <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
      </svg>
    </button>

    <!-- Invisible padding wrapper to prevent menu closing when moving cursor -->
    <div class="dd-hover-wrapper">
      <div class="dd-menu action-menu">
        <a href="#" class="dd-item with-icon">
          <svg class="dd-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          Analytics
        </a>
        <a href="#" class="dd-item with-icon">
          <svg class="dd-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
          Engagement
        </a>
      </div>
    </div>
  </div>
</template>`;

const optionsCode = `<template>
  <div class="dropdown-container" ref="optionsRef">
    <button @click="isOptionsOpen = !isOptionsOpen" class="icon-btn-trigger">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
    </button>

    <Transition name="dropdown-fade">
      <div v-show="isOptionsOpen" class="dd-menu action-menu options">
        <a href="#" class="dd-item">Edit Document</a>
        <a href="#" class="dd-item">Duplicate</a>
        <a href="#" class="dd-item">Share Link</a>
        <div class="dd-divider"></div>
        <a href="#" class="dd-item danger">Delete</a>
      </div>
    </Transition>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Dropdown Menus</h1>
    <p class="page-description">Floating contextual menus triggered by clicking or hovering, perfect for navbars and action lists.</p>
  </div>

  <!-- Variant 1: Click Trigger (Profile) -->
  <section class="component-section" style="z-index: 30; position: relative;">
    <div class="section-header">
      <SubTitle>Click Trigger (Profile Popover)</SubTitle>
      <button @click="toggle('click')" class="btn-toggle-code">{{ show['click'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center nav-bg" style="min-height: 350px;">
      
      <!-- Component -->
      <div class="dropdown-container" ref="profileRef">
        <button @click="isProfileOpen = !isProfileOpen" :class="['dd-trigger user', { active: isProfileOpen }]">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" class="avatar" alt="User avatar" />
        </button>
        
        <Transition name="dropdown-fade">
          <div v-show="isProfileOpen" class="dd-menu profile-menu">
            <div class="dd-header">
              <p class="name">Jane Doe</p>
              <p class="email">jane.doe@nexus.io</p>
            </div>
            <div class="dd-divider"></div>
            <a href="#" class="dd-item d-active">Your Profile</a>
            <a href="#" class="dd-item">Billing & Projects</a>
            <a href="#" class="dd-item">Settings</a>
            <div class="dd-divider"></div>
            <a href="#" class="dd-item danger">Sign out</a>
          </div>
        </Transition>
      </div>

    </div>
    <transition name="slide"><CodeSnippet v-if="show['click']" :code="clickCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Pure CSS Hover Trigger -->
  <section class="component-section" style="z-index: 20; position: relative;">
    <div class="section-header">
      <SubTitle>Hover Trigger (Navbar Menu)</SubTitle>
      <button @click="toggle('hover')" class="btn-toggle-code">{{ show['hover'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center dark-bg" style="min-height: 350px;">
      
      <!-- Component -->
      <div class="dropdown-hover-group">
        <button class="dd-trigger text-btn">
          Product Features
          <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
          </svg>
        </button>

        <div class="dd-hover-wrapper">
          <div class="dd-menu action-menu dark">
            <a href="#" class="dd-item with-icon">
              <div class="icon-wrap"><svg class="dd-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
              <div>
                <strong>Analytics</strong>
                <span>Get a better understanding of traffic.</span>
              </div>
            </a>
            <a href="#" class="dd-item with-icon">
              <div class="icon-wrap"><svg class="dd-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg></div>
              <div>
                <strong>Engagement</strong>
                <span>Speak directly to your customers.</span>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
    <transition name="slide"><CodeSnippet v-if="show['hover']" :code="hoverCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Actions Menu -->
  <section class="component-section" style="z-index: 10; position: relative;">
    <div class="section-header">
      <SubTitle>Table / List Action Menu</SubTitle>
      <button @click="toggle('options')" class="btn-toggle-code">{{ show['options'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center" style="min-height: 350px;">
      
      <!-- Component -->
      <div class="dropdown-container" ref="optionsRef">
        <button @click="isOptionsOpen = !isOptionsOpen" :class="['icon-btn-trigger', { active: isOptionsOpen }]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>

        <Transition name="dropdown-fade">
          <div v-show="isOptionsOpen" class="dd-menu action-menu options">
            <a href="#" class="dd-item">Edit Document</a>
            <a href="#" class="dd-item">Duplicate Project</a>
            <a href="#" class="dd-item">Archive</a>
            <a href="#" class="dd-item">Share Link</a>
            <div class="dd-divider"></div>
            <a href="#" class="dd-item danger">Delete Permanently</a>
          </div>
        </Transition>
      </div>

    </div>
    <transition name="slide"><CodeSnippet v-if="show['options']" :code="optionsCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.flex-center { display: flex; justify-content: center; align-items: flex-start; padding-top: 4rem; }
.preview-area.nav-bg { background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); border-color: transparent;}
.preview-area.dark-bg { background: #0f172a; border-color: transparent; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }
.sr-only { display: none; }

/* Global Dropdown Basics for positioning */
.dropdown-container { position: relative; }
.dd-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: -10px;
  background: white;
  min-width: 220px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05);
  padding: 0.5rem 0;
  z-index: 50;
  transform-origin: top right;
}

/* 1. Click Profile Menu */
.dd-trigger.user { background: transparent; border: none; padding: 0; cursor: pointer; border-radius: 50%; outline: none; transition: box-shadow 0.2s; }
.dd-trigger.user.active, .dd-trigger.user:focus-visible { box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.4); }
.avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }

.dd-header { padding: 0.75rem 1.25rem; }
.dd-header .name { margin: 0; font-weight: 600; font-size: 0.95rem; color: #0f172a; }
.dd-header .email { margin: 0; font-size: 0.85rem; color: #64748b; }

.dd-divider { height: 1px; background: #e2e8f0; margin: 0.5rem 0; }
.dd-item {
  display: block; width: 100%; text-align: left; padding: 0.6rem 1.25rem; font-size: 0.9rem; font-weight: 500;
  color: #334155; text-decoration: none; cursor: pointer; background: transparent; border: none; transition: all 0.1s;
}
.dd-item:hover, .dd-item:focus { background: #f8fafc; color: #0f172a; }
.dd-item.d-active { background: #e0e7ff; color: #4338ca; }
.dd-item.danger { color: #ef4444; }
.dd-item.danger:hover { background: #fef2f2; color: #b91c1c; }

/* 2. Hover Interaction Menu */
.dropdown-hover-group { position: relative; }
.dd-trigger.text-btn {
  background: transparent; border: none; color: #f8fafc; font-size: 1rem; font-weight: 600; padding: 0.75rem 1rem;
  display: flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: color 0.2s;
}
.dd-trigger.text-btn:hover { color: #38bdf8; }
.chevron { width: 20px; height: 20px; transition: transform 0.2s; }

/* The invisible wrapper prevents the menu from snapping shut when mouse crosses the 10px gap */
.dd-hover-wrapper {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%); padding-top: 10px; visibility: hidden; opacity: 0; transition: all 0.25s cubic-bezier(0.1, 0, 0, 1);
}

.dropdown-hover-group:hover .dd-hover-wrapper { visibility: visible; opacity: 1; }
.dropdown-hover-group:hover .chevron { transform: rotate(180deg); }

.action-menu {
  position: relative; top: auto; right: auto; left: auto; transform-origin: top center; width: 320px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1); padding: 0.75rem;
}
.action-menu.dark { background: #1e293b; color: white; }
.action-menu .dd-item.with-icon {
  display: flex; gap: 1rem; align-items: center; padding: 1rem; border-radius: 8px;
}
.action-menu.dark .dd-item:hover { background: #334155; }
.action-menu .icon-wrap { color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 0.6rem; border-radius: 8px; flex-shrink: 0; }
.dd-icon { width: 24px; height: 24px; }
.action-menu strong { display: block; font-size: 0.95rem; margin-bottom: 0.2rem; color: #f8fafc;}
.action-menu span { display: block; font-size: 0.85rem; color: #94a3b8;}

/* 3. Small Options Menu */
.icon-btn-trigger {
  width: 40px; height: 40px; border-radius: 8px; background: white; border: 1px solid #cbd5e1;
  display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; transition: all 0.2s;
}
.icon-btn-trigger:hover, .icon-btn-trigger.active { background: #f8fafc; border-color: #94a3b8; color: #0f172a; }
.action-menu.options { width: 200px; padding: 0.5rem; right: -8px; }
.action-menu.options .dd-item { padding: 0.5rem 1rem; border-radius: 6px; }

/* Active Menu Vue Transitions */
.dropdown-fade-enter-active { transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.dropdown-fade-leave-active { transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
.dropdown-fade-enter-from { opacity: 0; transform: scale(0.95) translateY(-10px); }
.dropdown-fade-leave-to { opacity: 0; transform: scale(0.95) translateY(-10px); }

/* Component Transitions */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
