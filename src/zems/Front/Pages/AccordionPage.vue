<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

// Section 1: State
const openSimple = ref(0);
const showCodeSimple = ref(false);

// Section 2: State
const openFlush = ref(null);
const showCodeFlush = ref(false);

// Section 3: State
const openGlass = ref(0);
const showCodeGlass = ref(false);

// Section 4: State
const openIcon = ref(0);
const showCodeIcon = ref(false);

const accordionData = [
  { title: 'What is PureVue?', content: 'PureVue is a modern, responsive, and highly customizable UI component library built for Vue 3 developers who prioritize both speed and aesthetics.' },
  { title: 'How do I install it?', content: 'You can install it via npm, yarn, or pnpm. Simply run the install command and import the styles as shown in our Guide.' },
  { title: 'Is it production ready?', content: 'Absolutely! Our components are rigorously tested and optimized for production environments, focusing on performance and accessibility.' }
];

const simpleAccordionHtml = `<template>
  <div class="accordion-group">
    <div v-for="(item, i) in accordionData" :key="i" class="accordion-item">
      <button @click="open = i" :class="['header', { active: open === i }]">
        {{ item.title }}
        <ChevronIcon :class="{ rotate: open === i }" />
      </button>
      <div class="body" v-show="open === i">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>`;

const simpleAccordionCss = `/* Accordion Bordered Style */
.accordion-group { display: flex; flex-direction: column; gap: 0.75rem; }
.accordion-item { border: 1px solid #e2e8f0; border-radius: 12px; background: white; overflow: hidden; transition: all 0.3s; }
.accordion-item.active { border-color: var(--primary-color); box-shadow: 0 4px 12px rgba(79, 70, 229, 0.08); }
.header { padding: 1.25rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; border: none; background: transparent; width: 100%; text-align: left; }
.header svg { transition: transform 0.3s; color: #64748b; }
.header.active svg { transform: rotate(180deg); color: var(--primary-color); }
.body { padding: 0 1.25rem 1.25rem; color: #64748b; line-height: 1.6; }`;

const simpleAccordionBlocks = [
  { name: 'Vue', language: 'html', code: simpleAccordionHtml },
  { name: 'CSS', language: 'css', code: simpleAccordionCss }
];

const flushAccordionHtml = `<template>
  <div class="accordion-flush">
    <!-- No outer borders, clean dividers -->
    <div v-for="(item, i) in accordionData" :key="i" class="item">
       ...
    </div>
  </div>
</template>`;

const flushAccordionCss = `/* Accordion Flush Style */
.accordion-flush { display: flex; flex-direction: column; }
.item { border-bottom: 1px solid #e2e8f0; }
.header { padding: 1.25rem 0; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.1rem; }
.plus-icon { font-size: 1.5rem; color: #64748b; width: 24px; text-align: center; }
.item.active .plus-icon { color: var(--primary-color); }
.body { padding: 0 0 1.5rem 0; color: #64748b; line-height: 1.6; }`;

const flushAccordionBlocks = [
  { name: 'Vue', language: 'html', code: flushAccordionHtml },
  { name: 'CSS', language: 'css', code: flushAccordionCss }
];
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Accordions</h1>
    <p class="page-description">Versatile expansion panels for organizing content in a compact, vertical stack.</p>
  </div>

  <!-- Variant 1: Modern Bordered -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Modern Bordered</SubTitle>
      <button @click="showCodeSimple = !showCodeSimple" class="btn-toggle-code">
        {{ showCodeSimple ? 'Hide Code' : 'Show Code' }}
      </button>
    </div>
    
    <div class="preview-area">
      <div class="accordion-bordered">
        <div v-for="(item, i) in accordionData" :key="i" class="acc-item" :class="{ active: openSimple === i }">
          <div @click="openSimple = openSimple === i ? null : i" class="acc-header">
            <span>{{ item.title }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="acc-body-wrapper" :style="{ maxHeight: openSimple === i ? '200px' : '0' }">
            <div class="acc-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <transition name="slide">
      <CodeSnippet v-if="showCodeSimple" :blocks="simpleAccordionBlocks" />
    </transition>
  </section>

  <!-- Variant 2: Modern Flush -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Modern Flush</SubTitle>
      <button @click="showCodeFlush = !showCodeFlush" class="btn-toggle-code">
        {{ showCodeFlush ? 'Hide Code' : 'Show Code' }}
      </button>
    </div>
    
    <div class="preview-area">
      <div class="accordion-flush">
        <div v-for="(item, i) in accordionData" :key="i" class="flush-item" :class="{ active: openFlush === i }">
          <div @click="openFlush = openFlush === i ? null : i" class="flush-header">
            <span>{{ item.title }}</span>
            <span class="plus-icon">{{ openFlush === i ? '−' : '+' }}</span>
          </div>
          <div class="flush-body-wrapper" :style="{ maxHeight: openFlush === i ? '200px' : '0' }">
            <div class="flush-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <transition name="slide">
      <CodeSnippet v-if="showCodeFlush" :blocks="flushAccordionBlocks" />
    </transition>
  </section>

  <!-- Variant 3: Soft Glass -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Soft Glassmorphism</SubTitle>
      <button @click="showCodeGlass = !showCodeGlass" class="btn-toggle-code">
        {{ showCodeGlass ? 'Hide Code' : 'Show Code' }}
      </button>
    </div>
    
    <div class="preview-area bg-dark-demo">
      <div class="accordion-glass">
        <div v-for="(item, i) in accordionData" :key="i" class="glass-item" :class="{ active: openGlass === i }">
          <div @click="openGlass = openGlass === i ? null : i" class="glass-header">
            <span>{{ item.title }}</span>
            <div class="dot-indicator"></div>
          </div>
          <div class="glass-body-wrapper" :style="{ maxHeight: openGlass === i ? '200px' : '0' }">
            <div class="glass-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Variant 4: Icon Based -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Icon Based</SubTitle>
      <button @click="showCodeIcon = !showCodeIcon" class="btn-toggle-code">
        {{ showCodeIcon ? 'Hide Code' : 'Show Code' }}
      </button>
    </div>
    
    <div class="preview-area">
      <div class="accordion-icons">
        <div class="icon-item" :class="{ active: openIcon === 0 }">
          <div @click="openIcon = 0" class="icon-header">
            <div class="icon-box blue"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg></div>
            <span>Branding & Design</span>
          </div>
          <div class="icon-body-wrapper" :style="{ maxHeight: openIcon === 0 ? '200px' : '0' }">
            <div class="icon-body">Crafting unique visual identities and consistent design languages across platforms.</div>
          </div>
        </div>
        <div class="icon-item" :class="{ active: openIcon === 1 }">
          <div @click="openIcon = 1" class="icon-header">
            <div class="icon-box purple"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
            <span>Development</span>
          </div>
          <div class="icon-body-wrapper" :style="{ maxHeight: openIcon === 1 ? '200px' : '0' }">
            <div class="icon-body">Building robust, scalable web applications with the latest technology stacks.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid var(--light-color);
  box-shadow: var(--shadow-sm);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.preview-area {
  padding: 2.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
}

.bg-dark-demo { background: #0f172a; padding: 3rem; border: none; }

.btn-toggle-code {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* 1. Bordered Style */
.accordion-bordered { display: flex; flex-direction: column; gap: 0.75rem; }
.acc-item { border: 1px solid #e2e8f0; border-radius: 12px; background: white; overflow: hidden; transition: all 0.3s; }
.acc-item.active { border-color: var(--primary-color); box-shadow: 0 4px 12px rgba(79, 70, 229, 0.08); }
.acc-header { padding: 1.25rem; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
.chevron { transition: transform 0.3s; color: var(--text-muted); }
.acc-item.active .chevron { transform: rotate(180deg); color: var(--primary-color); }
.acc-body-wrapper { transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; }
.acc-body { padding: 0 1.25rem 1.25rem; color: var(--text-muted); line-height: 1.6; }

/* 2. Flush Style */
.accordion-flush { display: flex; flex-direction: column; }
.flush-item { border-bottom: 1px solid #e2e8f0; }
.flush-header { padding: 1.25rem 0; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.1rem; }
.plus-icon { font-size: 1.5rem; color: var(--text-muted); width: 24px; text-align: center; }
.flush-item.active .plus-icon { color: var(--primary-color); }
.flush-body-wrapper { transition: max-height 0.3s ease; overflow: hidden; }
.flush-body { padding: 0 0 1.5rem 0; color: var(--text-muted); line-height: 1.6; }

/* 3. Glass Style */
.accordion-glass { display: flex; flex-direction: column; gap: 1rem; }
.glass-item { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; color: white; }
.glass-header { padding: 1.25rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 500; }
.dot-indicator { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.3); transition: all 0.3s; }
.glass-item.active .dot-indicator { background: var(--secondary-color); box-shadow: 0 0 10px var(--secondary-color); }
.glass-body-wrapper { transition: max-height 0.3s ease; overflow: hidden; }
.glass-body { padding: 0 1.25rem 1.25rem; opacity: 0.8; font-size: 0.95rem; line-height: 1.6; }

/* 4. Icon Style */
.accordion-icons { display: flex; flex-direction: column; gap: 0.75rem; }
.icon-item { background: white; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; transition: all 0.3s; }
.icon-item.active { border-color: var(--primary-color); }
.icon-header { padding: 1rem 1.25rem; display: flex; align-items: center; gap: 1rem; cursor: pointer; font-weight: 600; }
.icon-box { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; }
.icon-box.blue { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.icon-box.purple { background: linear-gradient(135deg, #a855f7, #9333ea); }
.icon-body-wrapper { transition: max-height 0.3s ease; overflow: hidden; }
.icon-body { padding: 0 1.25rem 1.25rem 4.75rem; color: var(--text-muted); line-height: 1.5; }

/* Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 500px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
