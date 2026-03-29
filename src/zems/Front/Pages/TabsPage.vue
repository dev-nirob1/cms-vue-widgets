<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

// Tab states
const underlineTab = ref('My Account');
const pillTab = ref('Monthly');
const segmentTab = ref('Preview');

const navItems1 = ['My Account', 'Company', 'Team Members', 'Billing'];
const navItems2 = ['Monthly', 'Annually', 'Lifetime'];
const navItems3 = ['Preview', 'Code', 'Issues'];

const underlineCode = `<template>
  <div class="tabs-underline-wrapper">
    <nav class="tabs-underline" aria-label="Tabs">
      <button 
        v-for="tab in tabs" :key="tab"
        :class="['tab-btn', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </nav>
  </div>
  
  <div class="tab-panel">
    <h4>{{ activeTab }} Content</h4>
    <p>Displays content specific to the selected tab.</p>
  </div>
</template>`;

const pillCode = `<template>
  <div class="tabs-pill">
    <button 
      v-for="tab in tabs" :key="tab"
      :class="['pill-btn', { active: activeTab === tab }]"
      @click="activeTab = tab"
    >
      {{ tab }}
    </button>
  </div>
</template>`;

const segmentCode = `<template>
  <div class="segmented-control">
    <button 
      v-for="tab in tabs" :key="tab"
      :class="['segment-btn', { active: activeTab === tab }]"
      @click="activeTab = tab"
    >
      {{ tab }}
    </button>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Tabs & Segmented Controls</h1>
    <p class="page-description">Navigation components allowing users to easily switch between different views within the same context.</p>
  </div>

  <!-- Variant 1: Underline Tabs -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Classic Underline Tabs</SubTitle>
      <button @click="toggle('underline')" class="btn-toggle-code">{{ show['underline'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="tabs-container">
        <!-- Tab Nav -->
        <div class="tabs-underline-wrapper">
          <nav class="tabs-underline" aria-label="Tabs">
            <button 
              v-for="item in navItems1" 
              :key="item"
              :class="['tab-btn', { active: underlineTab === item }]"
              @click="underlineTab = item"
            >
              {{ item }}
            </button>
          </nav>
        </div>
        
        <!-- Tab Content -->
        <div class="tab-panel">
          <div v-if="underlineTab === 'My Account'" class="panel-content fade-in">
            <h4>Account Settings</h4>
            <p>Update your photo and personal details here.</p>
          </div>
          <div v-else-if="underlineTab === 'Company'" class="panel-content fade-in">
            <h4>Company Directory</h4>
            <p>Manage your company's information and tax details.</p>
          </div>
          <div v-else-if="underlineTab === 'Team Members'" class="panel-content fade-in">
            <h4>Manage Team</h4>
            <p>Invite new members or adjust user roles.</p>
          </div>
          <div v-else class="panel-content fade-in">
            <h4>Billing Overview</h4>
            <p>View past invoices and update your payment methods.</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['underline']" :code="underlineCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Pill Tabs -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Pill Tabs</SubTitle>
      <button @click="toggle('pill')" class="btn-toggle-code">{{ show['pill'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center">
      <div class="tabs-container centered">
        <!-- Pill Nav -->
        <div class="tabs-pill">
          <button 
            v-for="item in navItems2" 
            :key="item"
            :class="['pill-btn', { active: pillTab === item }]"
            @click="pillTab = item"
          >
            {{ item }}
            <!-- Add dynamic badge for 'Annually' -->
            <span v-if="item === 'Annually'" class="badge-discount">-20%</span>
          </button>
        </div>
        
        <!-- Pill Content -->
        <div class="tab-panel centered mt-2">
          <h2 v-if="pillTab === 'Monthly'">$29 / mo</h2>
          <h2 v-else-if="pillTab === 'Annually'">$278 / yr</h2>
          <h2 v-else>$999 once</h2>
          <p class="text-sm">Billed {{ pillTab.toLowerCase() }}</p>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['pill']" :code="pillCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Segmented Controls -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Segmented Control (iOS Style)</SubTitle>
      <button @click="toggle('segment')" class="btn-toggle-code">{{ show['segment'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area dark-bg flex-center">
      <!-- Segment Nav -->
      <div class="segmented-control">
        <button 
          v-for="item in navItems3" 
          :key="item"
          :class="['segment-btn', { active: segmentTab === item }]"
          @click="segmentTab = item"
        >
          <span v-if="item === 'Preview'"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
          <span v-else-if="item === 'Code'"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span>
          <span v-else><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>
          {{ item }}
        </button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['segment']" :code="segmentCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.flex-center { display: flex; justify-content: center; align-items: center; flex-direction: column; }
.preview-area.dark-bg { background: #0f172a; border-color: transparent; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

.tabs-container { width: 100%; max-width: 600px; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;}
.tabs-container.centered { padding: 2rem; border: none; background: transparent; box-shadow: none; display: flex; flex-direction: column; align-items: center;}

/* Variant 1: Underline Tabs */
.tabs-underline-wrapper { border-bottom: 1px solid #e2e8f0; }
.tabs-underline { display: flex; gap: 2rem; padding: 0 1.5rem; overflow-x: auto; }
.tab-btn {
  background: transparent; border: none; border-bottom: 2px solid transparent; margin-bottom: -1px;
  padding: 1rem 0; font-size: 0.95rem; font-weight: 500; color: #64748b; cursor: pointer;
  white-space: nowrap; transition: all 0.2s;
}
.tab-btn:hover { color: #0f172a; border-bottom-color: #cbd5e1; }
.tab-btn.active { color: #4f46e5; border-bottom-color: #4f46e5; font-weight: 600; }

.tab-panel { padding: 2rem 1.5rem; }
.tab-panel.centered { text-align: center; }
.tab-panel h4 { margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 700; color: #0f172a; }
.tab-panel h2 { margin: 0 0 0.25rem 0; font-size: 2.5rem; font-weight: 800; color: #0f172a; }
.tab-panel p { margin: 0; font-size: 0.95rem; color: #64748b; line-height: 1.5; }
.text-sm { font-size: 0.85rem !important; }
.mt-2 { margin-top: 1.5rem; }

/* Variant 2: Pill Tabs */
.tabs-pill { display: flex; gap: 0.25rem; background: white; padding: 0.35rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
.pill-btn {
  background: transparent; border: none; border-radius: 8px;
  padding: 0.6rem 1.25rem; font-size: 0.9rem; font-weight: 600; color: #475569;
  cursor: pointer; transition: all 0.2s; position: relative; display: flex; align-items: center; gap: 0.4rem;
}
.pill-btn:hover { background: #f1f5f9; color: #0f172a; }
.pill-btn.active { background: #4f46e5; color: white; box-shadow: 0 4px 6px -1px rgba(79,70,229,0.3); }
.badge-discount { background: #bae6fd; color: #0369a1; font-size: 0.65rem; padding: 0.1rem 0.3rem; border-radius: 4px; }
.pill-btn.active .badge-discount { background: rgba(255,255,255,0.2); color: white; }


/* Variant 3: Segmented Controls */
.segmented-control {
  display: flex; background: #1e293b; padding: 0.35rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); width: 100%; max-width: 400px;
}
.segment-btn {
  flex: 1; background: transparent; border: none; border-radius: 6px;
  padding: 0.5rem 0; font-size: 0.85rem; font-weight: 600; color: #94a3b8;
  cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.4rem;
}
.segment-btn:hover { color: white; }
.segment-btn.active { background: #334155; color: white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }

/* Animations */
.fade-in { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
