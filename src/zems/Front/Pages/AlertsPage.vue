<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

// Interactive Toast State
const toasts = ref([]);
let toastId = 0;

const showToast = (type) => {
  const tId = toastId++;
  const newToast = {
    id: tId,
    type,
    title: type === 'success' ? 'Successfully saved!' : type === 'error' ? 'Failed to process' : 'New message received',
    desc: type === 'success' ? 'Your profile changes have been applied.' : type === 'error' ? 'There was a network error while saving.' : 'Jane Doe sent you a new message.'
  };
  toasts.value.push(newToast);
  
  // Auto dismiss after 4s
  setTimeout(() => {
    removeToast(tId);
  }, 4000);
};

const removeToast = (id) => {
  toasts.value = toasts.value.filter(t => t.id !== id);
};

const standardCode = `<template>
  <!-- Success -->
  <div class="alert alert-success">
    <div class="alert-icon"><!-- SVG --></div>
    <div class="alert-content">
      <h5>Order completed</h5>
      <p>Your receipt has been sent via email.</p>
    </div>
    <button class="alert-close">×</button>
  </div>
  
  <!-- Error -->
  <div class="alert alert-danger">
    <div class="alert-icon"><!-- SVG --></div>
    <div class="alert-content">
      <h5>Payment failed</h5>
      <p>Please update your billing information to continue.</p>
    </div>
  </div>
</template>`;

const borderCode = `<template>
  <div class="alert border-left warning">
    <div class="alert-icon"><!-- SVG --></div>
    <div class="alert-content">
      <h5>Action Required</h5>
      <p>Your subscription expires in 3 days. Renew now to avoid interruption.</p>
    </div>
    <button class="btn warning-text">Renew</button>
  </div>
</template>`;

const toastCode = `<template>
  <button @click="showToast('success')">Show Toast</button>

  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast-list">
        <div v-for="toast in toasts" :key="toast.id" :class="['toast-card', toast.type]">
          <div class="toast-icon"><!-- SVG based on type --></div>
          <div class="toast-text">
            <strong>{{ toast.title }}</strong>
            <span>{{ toast.desc }}</span>
          </div>
          <button @click="removeToast(toast.id)" class="toast-close">×</button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Alerts & Toasts</h1>
    <p class="page-description">Interruptive messages to communicate success, warnings, errors, and system status.</p>
  </div>

  <!-- Variant 1: Soft Banners -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Soft Banner Alerts</SubTitle>
      <button @click="toggle('standard')" class="btn-toggle-code">{{ show['standard'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="alert-stack">
        <!-- Success -->
        <div class="al-banner al-success">
          <div class="al-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
          <div class="al-text">
            <h5>Order completed successfully</h5>
            <p>Your receipt has been generated and sent directly to your account email.</p>
          </div>
          <button class="al-close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
        </div>
        
        <!-- Error -->
        <div class="al-banner al-error">
          <div class="al-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
          <div class="al-text">
            <h5>There were 2 errors with your submission</h5>
            <ul class="al-list">
              <li>Your password must be at least 8 characters.</li>
              <li>The verification token has expired.</li>
            </ul>
          </div>
        </div>
        
        <!-- Info -->
        <div class="al-banner al-info">
          <div class="al-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
          <div class="al-text">
            <h5>A new software update is available</h5>
            <p>Version 2.4 is available. Includes several security fixes and performance improvements.</p>
          </div>
          <div class="al-actions">
            <button class="al-btn text">Details</button>
            <button class="al-btn outline">Update now</button>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['standard']" :code="standardCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Border Left -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Border-Left Highlights</SubTitle>
      <button @click="toggle('border')" class="btn-toggle-code">{{ show['border'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="alert-stack">
        <!-- Warning -->
        <div class="al-border al-warn">
          <div class="al-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
          <div class="al-text">
            <h5>Attention Needed</h5>
            <p>Your credit card is about to expire. Update your payment method to ensure uninterrupted service.</p>
          </div>
          <button class="al-btn plain warn-text">Update payment</button>
        </div>

        <!-- Success Border -->
        <div class="al-border al-success">
          <div class="al-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
          <div class="al-text">
            <h5>Upload Complete</h5>
            <p>14 files have been successfully uploaded to the 'Documents' folder.</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['border']" :code="borderCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Interactive Toasts -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Floating Toasts / Snackbars</SubTitle>
      <button @click="toggle('toast')" class="btn-toggle-code">{{ show['toast'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="toast-trigger-grid">
        <button @click="showToast('success')" class="trigger-btn success">Trigger Success Toast</button>
        <button @click="showToast('error')" class="trigger-btn error">Trigger Error Toast</button>
        <button @click="showToast('info')" class="trigger-btn info">Trigger Info Toast</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['toast']" :code="toastCode" language="html" /></transition>

    <!-- Teleport container for Toasts to render globally -->
    <Teleport to="body">
      <div class="toast-container">
        <TransitionGroup name="toast-list">
          <div v-for="toast in toasts" :key="toast.id" :class="['toast-card', toast.type]">
            
            <div class="t-icon" v-if="toast.type==='success'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
            <div class="t-icon" v-if="toast.type==='error'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
            <div class="t-icon" v-if="toast.type==='info'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
            
            <div class="t-content">
              <strong>{{ toast.title }}</strong>
              <span>{{ toast.desc }}</span>
            </div>
            <button @click="removeToast(toast.id)" class="t-close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </TransitionGroup>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; display: flex; justify-content: center; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

.alert-stack { display: flex; flex-direction: column; gap: 1.5rem; width: 100%; max-width: 600px; }

/* 1. Soft Banners */
.al-banner { display: flex; gap: 1rem; padding: 1rem; border-radius: 10px; width: 100%; align-items: flex-start; }
.al-icon { padding-top: 0.2rem; flex-shrink: 0; }
.al-text { flex: 1; }
.al-text h5 { margin: 0 0 0.25rem 0; font-size: 0.95rem; font-weight: 700; }
.al-text p { margin: 0; font-size: 0.875rem; line-height: 1.5; }
.al-close { background: transparent; border: none; cursor: pointer; padding: 0.25rem; border-radius: 4px; display: flex; opacity: 0.7; transition: all 0.2s; }
.al-close:hover { opacity: 1; background: rgba(0,0,0,0.05); }

.al-success { background: #f0fdf4; color: #166534; }
.al-success .al-icon { color: #22c55e; }
.al-success .al-text p { color: #15803d; }

.al-error { background: #fef2f2; color: #991b1b; }
.al-error .al-icon { color: #ef4444; }
.al-error .al-text p { color: #b91c1c; }
.al-list { margin: 0; padding-left: 1.5rem; font-size: 0.875rem; color: #b91c1c; }

.al-info { background: #eff6ff; color: #1e40af; }
.al-info .al-icon { color: #3b82f6; }
.al-info .al-text p { color: #1d4ed8; }

.al-actions { display: flex; gap: 0.75rem; margin-top: 0.75rem; }
.al-btn { background: transparent; border: none; font-size: 0.85rem; font-weight: 700; cursor: pointer; border-radius: 6px; padding: 0.35rem 0.75rem; transition: all 0.2s; }
.al-btn.text { color: #1e40af; padding-left: 0; padding-right: 0; }
.al-btn.text:hover { color: #1e3a8a; }
.al-btn.outline { border: 1px solid #bfdbfe; color: #1d4ed8; }
.al-btn.outline:hover { background: #e0f2fe; }

/* 2. Border Left Highlights */
.al-border { display: flex; gap: 1rem; padding: 1.25rem; border-radius: 6px; width: 100%; align-items: center; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid transparent; }
.al-warn { border-left-color: #eab308; }
.al-warn .al-icon { color: #eab308; }
.al-success { border-left-color: #22c55e; }
.al-success .al-icon { color: #22c55e; }
.al-border .al-text h5 { margin: 0 0 0.15rem 0; font-size: 0.95rem; font-weight: 700; color: #0f172a; }
.al-border .al-text p { margin: 0; font-size: 0.85rem; color: #64748b; }
.al-btn.plain { background: transparent; border: none; font-size: 0.85rem; font-weight: 600; cursor: pointer; padding: 0.5rem 0.75rem; border-radius: 6px; white-space: nowrap; }
.al-btn.plain:hover { background: #f1f5f9; }
.al-btn.warn-text { color: #ca8a04; }
.al-btn.warn-text:hover { background: #fefce8; }

/* 3. Toast Triggers */
.toast-trigger-grid { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
.trigger-btn { border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-weight: 600; font-size: 0.95rem; color: white; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.trigger-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
.trigger-btn.success { background: #22c55e; }
.trigger-btn.error { background: #ef4444; }
.trigger-btn.info { background: #3b82f6; }

/* Global Toasts (Teleport) */
:global(.toast-container) {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 11000;
  pointer-events: none; /* Let clicks pass through container */
}

:global(.toast-card) {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  width: 320px;
  border-left: 4px solid #cbd5e1;
  pointer-events: auto; /* Re-enable clicks on the toast itself */
}
:global(.toast-card.success) { border-left-color: #22c55e; }
:global(.toast-card.error) { border-left-color: #ef4444; }
:global(.toast-card.info) { border-left-color: #3b82f6; }

:global(.t-icon) { padding-top: 0.1rem; }
:global(.toast-card.success .t-icon) { color: #22c55e; }
:global(.toast-card.error .t-icon) { color: #ef4444; }
:global(.toast-card.info .t-icon) { color: #3b82f6; }

:global(.t-content) { flex: 1; display: flex; flex-direction: column; gap: 0.2rem; }
:global(.t-content strong) { font-size: 0.9rem; font-weight: 700; color: #0f172a; }
:global(.t-content span) { font-size: 0.85rem; color: #64748b; line-height: 1.4; }

:global(.t-close) {
  background: transparent; border: none; color: #cbd5e1; margin-left: 0.5rem;
  padding: 0.2rem; cursor: pointer; border-radius: 4px; display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
:global(.t-close:hover) { background: #f1f5f9; color: #64748b; }

/* Global Toast Transitions */
:global(.toast-list-enter-active), :global(.toast-list-leave-active) {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
:global(.toast-list-enter-from) {
  opacity: 0;
  transform: translateX(100px) scale(0.9);
}
:global(.toast-list-leave-to) {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* Local Code Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
