<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const badgesCode = `<template>
  <div class="badge-group">
    <!-- Solid -->
    <span class="badge solid-gray">Draft</span>
    <span class="badge solid-red">Declined</span>
    <span class="badge solid-green">Completed</span>
    <span class="badge solid-blue">On Hold</span>

    <!-- Soft -->
    <span class="badge soft-gray">Draft</span>
    <span class="badge soft-red">Declined</span>
    <span class="badge soft-green">Completed</span>
    <span class="badge soft-blue">On Hold</span>
    
    <!-- With Dots -->
    <span class="badge soft-gray">
      <span class="dot d-gray"></span> Offline
    </span>
    <span class="badge soft-green">
      <span class="dot d-green"></span> Active
    </span>
    <span class="badge soft-red">
      <span class="dot d-red"></span> Alert
    </span>
  </div>
</template>`;

const avatarCode = `<template>
  <div class="avatar-group">
    <div class="avatar-stack">
      <img src="..." class="avatar a-md" alt="" />
      <img src="..." class="avatar a-md" alt="" />
      <img src="..." class="avatar a-md" alt="" />
      <img src="..." class="avatar a-md" alt="" />
      <span class="avatar a-md a-rest">+12</span>
    </div>

    <!-- Active Indicator -->
    <div class="avatar-wrapper">
      <img src="..." class="avatar a-lg" alt="" />
      <span class="status-indicator active"></span>
    </div>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Badges & Avatars</h1>
    <p class="page-description">Small status indicators, keyword tagging pills, and overlapping user photo stacks.</p>
  </div>

  <!-- Variant 1: Status Badges -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Status Badges & Dots</SubTitle>
      <button @click="toggle('badges')" class="btn-toggle-code">{{ show['badges'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center dark-bg flex-col">
      <div class="badge-row line-under">
        <span class="badge solid-gray">Architect</span>
        <span class="badge solid-red">Removed</span>
        <span class="badge solid-yellow">Pending</span>
        <span class="badge solid-green">Success</span>
        <span class="badge solid-blue">New Feature</span>
      </div>
      <div class="badge-row line-under">
        <span class="badge soft-gray">Architect</span>
        <span class="badge soft-red">Removed</span>
        <span class="badge soft-yellow">Pending</span>
        <span class="badge soft-green">Success</span>
        <span class="badge soft-blue">New Feature</span>
      </div>
      <div class="badge-row">
        <span class="badge outline-gray"><span class="dot d-gray"></span> Offline</span>
        <span class="badge outline-red"><span class="dot d-red"></span> Alerting</span>
        <span class="badge outline-yellow"><span class="dot d-yellow"></span> Processing</span>
        <span class="badge outline-green"><span class="dot d-green"></span> Operational</span>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['badges']" :code="badgesCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Avatars -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Avatar Stacks & Contexts</SubTitle>
      <button @click="toggle('avatars')" class="btn-toggle-code">{{ show['avatars'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center flex-gap">
      
      <!-- Overlapping Stack -->
      <div class="av-container">
        <span class="av-label">Project Viewers</span>
        <div class="avatar-stack">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" class="avatar a-md ring" alt="" />
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150" class="avatar a-md ring" alt="" />
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" class="avatar a-md ring" alt="" />
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" class="avatar a-md ring" alt="" />
          <span class="avatar a-md ring a-rest flex-center">+12</span>
        </div>
      </div>

      <!-- User Context -->
      <div class="av-container">
        <span class="av-label">Active User</span>
        <div class="avatar-wrapper">
          <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=150" class="avatar a-lg" alt="" />
          <span class="status-indicator active"></span>
        </div>
      </div>

    </div>
    <transition name="slide"><CodeSnippet v-if="show['avatars']" :code="avatarCode" language="html" /></transition>
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
.preview-area.flex-col { flex-direction: column; gap: 1.5rem;}
.preview-area.flex-gap { gap: 4rem; flex-wrap: wrap;}
.preview-area.dark-bg { background: #0f172a; border-color: transparent;}

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* 1. Badges */
.badge-row { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; padding-bottom: 1.5rem;}
.badge-row.line-under { border-bottom: 1px dashed rgba(255,255,255,0.1); width: 100%; max-width: 600px; margin-bottom: 0.5rem; }
.badge { display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.25rem 0.65rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap;}
.dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }

.solid-gray { background: #475569; color: white; }
.solid-red { background: #ef4444; color: white; }
.solid-yellow { background: #eab308; color: white; }
.solid-green { background: #22c55e; color: white; }
.solid-blue { background: #3b82f6; color: white; }

.soft-gray { background: #f1f5f9; color: #475569; }
.soft-red { background: #fef2f2; color: #991b1b; }
.soft-yellow { background: #fefce8; color: #854d0e; }
.soft-green { background: #f0fdf4; color: #166534; }
.soft-blue { background: #eff6ff; color: #1e40af; }

.outline-gray { border: 1px solid rgba(255,255,255,0.2); color: #cbd5e1; }
.d-gray { background: #94a3b8; }
.outline-red { border: 1px solid #7f1d1d; color: #fca5a5; }
.d-red { background: #ef4444; }
.outline-yellow { border: 1px solid #713f12; color: #fde047; }
.d-yellow { background: #eab308; }
.outline-green { border: 1px solid #14532d; color: #86efac; }
.d-green { background: #22c55e; }

/* 2. Avatars */
.av-container { padding: 1.5rem 2rem; background: white; border-radius: 12px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: center; gap: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.av-label { font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;}

.avatar-stack { display: flex; align-items: center; }
.avatar { border-radius: 50%; object-fit: cover; background: #e2e8f0; }
.a-md { width: 44px; height: 44px; }
.a-lg { width: 64px; height: 64px; }

.avatar.ring { border: 3px solid white; box-shadow: 0 0 0 1px rgba(0,0,0,0.05); }
.avatar-stack .avatar { margin-right: -12px; transition: transform 0.2s; position: relative; }
.avatar-stack .avatar:hover { transform: translateY(-4px); z-index: 10; }
.a-rest { display: flex; align-items: center; justify-content: center; background: #f1f5f9; color: #475569; font-size: 0.8rem; font-weight: 700; border: 3px solid white; z-index: 5; margin-right: 0 !important;}

.avatar-wrapper { position: relative; display: inline-block; }
.status-indicator { position: absolute; bottom: 2px; right: 2px; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; }
.status-indicator.active { background: #22c55e; }

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
