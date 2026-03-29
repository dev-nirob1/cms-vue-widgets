<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const horizontalCode = `<template>
  <nav aria-label="Progress">
    <ol role="list" class="steps-horizontal">
      <!-- Completed Step -->
      <li class="step-item pr-completed">
        <div class="step-wrap">
          <span class="step-circle completed">
            <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
          </span>
          <span class="step-label">Job Details</span>
        </div>
        <div class="step-line complete"></div>
      </li>
      
      <!-- Current Step -->
      <li class="step-item pr-current">
        <div class="step-wrap">
          <span class="step-circle current">2</span>
          <span class="step-label">Application Form</span>
        </div>
        <div class="step-line"></div>
      </li>
      
      <!-- Upcoming Step (Last) -->
      <li class="step-item pr-upcoming">
        <div class="step-wrap">
          <span class="step-circle upcoming">3</span>
          <span class="step-label">Preview</span>
        </div>
      </li>
    </ol>
  </nav>
</template>`;

const verticalCode = `<template>
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-marker completed">
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
      </div>
      <div class="tl-content">
        <h4>Order Placed</h4>
        <p>12:40 PM, Wed, Oct 24</p>
      </div>
    </div>
    <div class="tl-line completed"></div>

    <div class="tl-item">
      <div class="tl-marker current">
        <div class="dot"></div>
      </div>
      <div class="tl-content">
        <h4>Order Processing</h4>
        <p>Your items are being gathered.</p>
      </div>
    </div>
    <div class="tl-line"></div>

    <div class="tl-item">
      <div class="tl-marker upcoming"></div>
      <div class="tl-content upcoming">
        <h4>Out for Delivery</h4>
        <p>Pending carrier pickup.</p>
      </div>
    </div>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Steps & Timelines</h1>
    <p class="page-description">Progress trackers for multi-page wizards, checkout flows, and system event histories.</p>
  </div>

  <!-- Variant 1: Horizontal Wizard (Checkout Style) -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Horizontal E-commerce Wizard</SubTitle>
      <button @click="toggle('horizontal')" class="btn-toggle-code">{{ show['horizontal'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area flex-center">
      <div class="wizard-container">
        <nav aria-label="Progress" class="w-full">
          <ol role="list" class="steps-horizontal">
            <!-- Completed Step -->
            <li class="step-item pr-completed">
              <div class="step-wrap">
                <span class="step-circle completed">
                  <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                </span>
                <span class="step-label">Shipping Profile</span>
              </div>
              <div class="step-line complete"></div>
            </li>
            
            <!-- Current Step -->
            <li class="step-item pr-current">
              <div class="step-wrap current-pulse">
                <span class="step-circle current">2</span>
                <span class="step-label">Payment Method</span>
              </div>
              <div class="step-line"></div>
            </li>
            
            <!-- Upcoming Step (Last) -->
            <li class="step-item pr-upcoming last">
              <div class="step-wrap">
                <span class="step-circle upcoming">3</span>
                <span class="step-label">Confirm Order</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['horizontal']" :code="horizontalCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Vertical Status Timeline -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Vertical Status Timeline</SubTitle>
      <button @click="toggle('vertical')" class="btn-toggle-code">{{ show['vertical'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="timeline-container">
        
        <div class="timeline">
          <!-- Step 1 -->
          <div class="tl-item">
            <div class="tl-marker completed">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            </div>
            <div class="tl-content">
              <h4>Order Received</h4>
              <p>12:40 PM, Wed, Oct 24</p>
            </div>
          </div>
          <div class="tl-line completed"></div>

          <!-- Step 2 -->
          <div class="tl-item">
            <div class="tl-marker current">
              <div class="dot"></div>
            </div>
            <div class="tl-content">
              <h4>Processing</h4>
              <p>Your items are being gathered from the warehouse.</p>
            </div>
          </div>
          <div class="tl-line"></div>

          <!-- Step 3 -->
          <div class="tl-item">
            <div class="tl-marker upcoming"></div>
            <div class="tl-content upcoming">
              <h4>Out for Delivery</h4>
              <p>Pending carrier pickup.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['vertical']" :code="verticalCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 4rem 2rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.flex-center { display: flex; justify-content: center; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* 1. Horizontal Steps */
.wizard-container { width: 100%; max-width: 800px; padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.w-full { width: 100%; }
.steps-horizontal { display: flex; list-style: none; padding: 0; margin: 0; align-items: center; }
.step-item { flex: 1; position: relative; display: flex; align-items: center; }
.step-item.last { flex: none; }

.step-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; z-index: 10; gap: 0.75rem;}
.step-circle { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 700; transition: all 0.3s; }
.step-label { font-size: 0.875rem; font-weight: 600; text-align: center; margin-top: 0.5rem; position: absolute; top: 100%; white-space: nowrap; }

.step-circle.completed { background: #4f46e5; color: white; box-shadow: 0 0 0 4px #e0e7ff; }
.check-icon { width: 20px; height: 20px; }
.pr-completed .step-label { color: #4338ca; }

.step-circle.current { background: white; color: #4f46e5; border: 2px solid #4f46e5; box-shadow: 0 0 0 4px #e0e7ff; }
.pr-current .step-label { color: #0f172a; }

.step-circle.upcoming { background: white; color: #94a3b8; border: 2px solid #cbd5e1; }
.pr-upcoming .step-label { color: #94a3b8; font-weight: 500; }

.step-line { position: absolute; left: 50%; right: -50%; top: 18px; height: 2px; background: #e2e8f0; z-index: 0; transform: translateY(-50%); }
.step-line.complete { background: #4f46e5; }

@media (max-width: 640px) {
  .steps-horizontal { flex-direction: column; align-items: flex-start; gap: 2rem;}
  .step-line { display: none; }
  .step-wrap { flex-direction: row; gap: 1rem; position: static;}
  .step-label { position: static; margin-top: 0; }
  .step-item { flex: none; width: 100%;}
}

/* 2. Vertical Timeline */
.timeline-container { background: white; padding: 3rem; border-radius: 12px; max-width: 500px; margin: 0 auto; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.timeline { display: flex; flex-direction: column; }
.tl-item { display: flex; gap: 1.5rem; align-items: flex-start; position: relative; z-index: 2; }
.tl-marker { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 2px solid transparent; background: white; }
.tl-marker.completed { background: #22c55e; color: white; border-color: #22c55e;}
.tl-marker.completed svg { width: 18px; height: 18px; }
.tl-marker.current { border-color: #4f46e5; }
.tl-marker.current .dot { width: 12px; height: 12px; background: #4f46e5; border-radius: 50%; }
.tl-marker.upcoming { border-color: #cbd5e1; background: #f8fafc; }

.tl-content { padding-bottom: 2rem; transform: translateY(5px); }
.tl-content h4 { margin: 0 0 0.25rem 0; font-size: 1rem; font-weight: 700; color: #0f172a; }
.tl-content p { margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.4; }
.tl-content.upcoming h4 { color: #64748b; font-weight: 500; }
.tl-content.upcoming p { color: #94a3b8; }

.tl-line { width: 2px; height: 40px; background: #e2e8f0; margin-left: 15px; margin-top: -30px; margin-bottom: -10px; z-index: 1; }
.tl-line.completed { background: #22c55e; }

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
