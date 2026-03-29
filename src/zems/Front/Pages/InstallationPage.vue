<script setup>
import { RouterLink } from 'vue-router';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

// Use Vite's ?raw query to load the massive CSS files as strings automatically!
import gridCssRaw from '@/assets/grid.css?raw';
import mainCssRaw from '@/assets/main.css?raw';

const gridBlock = [{ name: 'grid.css', language: 'css', code: gridCssRaw }];
const mainBlock = [{ name: 'main.css', language: 'css', code: mainCssRaw }];

</script>

<template>
  <div class="page-header">
    <div class="badge-pill premium">Quickstart Guide</div>
    <h1 class="page-title">Installation</h1>
    <p class="page-description">PureVue is not a bloated npm package. It is a collection of reusable components. You do not install it; you copy its core foundations into your project.</p>
  </div>

  <div class="installation-layout">
    
    <!-- Philosophy Alert -->
    <div class="info-alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
      </div>
      <div class="alert-content">
        <h4>Architecture Philosophy</h4>
        <p>This library is built on a <strong>Core Foundation + Widget</strong> model. Before you can copy any components, you must install the global layout system (`grid.css`) and global variable/typography system (`main.css`). All widgets heavily rely on these two core files being present in your application.</p>
      </div>
    </div>

    <!-- Step 1 -->
    <section class="step-section">
      <div class="step-header">
        <div class="step-number">1</div>
        <SubTitle>Install the Responsive layout system</SubTitle>
      </div>
      <p class="step-text">
        Create a file called <code>grid.css</code> inside your project's <code>src/assets/</code> directory and paste the following baseline CSS. This controls all row, column, spacing, and grid definitions globally. Avoid modifying this file.
      </p>
      <div class="code-wrapper">
        <CodeSnippet :blocks="gridBlock" />
      </div>
    </section>

    <!-- Step 2 -->
    <section class="step-section">
      <div class="step-header">
        <div class="step-number">2</div>
        <SubTitle>Install the Design Tokens</SubTitle>
      </div>
      <p class="step-text">
        Create a file called <code>main.css</code> in the same directory. This contains all typography scales, color palettes, border radius definitions, and global HTML tag resets (like <code>&lt;a&gt;</code> and <code>&lt;p&gt;</code>). This file automatically imports your <code>grid.css</code>.
      </p>
      <div class="code-wrapper">
        <CodeSnippet :blocks="mainBlock" />
      </div>
    </section>

    <!-- Step 3 -->
    <section class="step-section">
      <div class="step-header">
        <div class="step-number">3</div>
        <SubTitle>Link your stylesheets</SubTitle>
      </div>
      <p class="step-text">
        Finally, import your <code>main.css</code> file into your application's entry point. Once this is done, you are ready to copy and paste any widget from this library!
      </p>
      <div class="code-wrapper">
        <CodeSnippet :blocks="[{ name: 'main.js (or main.ts)', language: 'javascript', code: `import { createApp } from 'vue'\nimport App from './App.vue'\nimport router from './router'\n\n// Import PureVue Core Foundations\nimport './assets/main.css'\n\nconst app = createApp(App)\napp.use(router)\napp.mount('#app')` }]" />
      </div>
    </section>

    <!-- Success / Next Actions -->
    <div class="next-steps-card">
      <div class="card-icon">🎉</div>
      <div class="card-text">
        <h3>You're all set!</h3>
        <p>The core layout and styling system is active. You can now browse the component library and assemble your application.</p>
      </div>
      <RouterLink to="/button" class="btn btn-primary">Browse Components <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></RouterLink>
    </div>

  </div>
</template>

<style scoped>
.page-header { margin-bottom: 4rem; }
.badge-pill.premium { display: inline-block; background: rgba(79, 70, 229, 0.1); color: var(--primary-color); padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem; border: 1px solid rgba(79, 70, 229, 0.2); }
.page-title { font-size: 3rem; font-weight: 900; color: #0f172a; margin-bottom: 1rem; letter-spacing: -0.03em; }
.page-description { font-size: 1.125rem; color: #64748b; max-width: 700px; line-height: 1.6; }

.installation-layout {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 800px;
}

/* Info Alert */
.info-alert {
  display: flex;
  gap: 1.25rem;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-left: 4px solid var(--primary-color);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
}
.alert-icon { color: var(--primary-color); padding-top: 0.1rem; }
.alert-content h4 { margin: 0 0 0.5rem 0; font-size: 1.05rem; font-weight: 700; color: #0f172a; }
.alert-content p { margin: 0; font-size: 0.95rem; line-height: 1.6; color: #475569; }
.alert-content strong { color: #0f172a; }

/* Steps */
.step-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f1f5f9;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  border: 1px solid #e2e8f0;
}

.step-text {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 0 3rem; /* Indent to match number */
}

.step-text code {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
  color: #c026d3;
  font-family: monospace;
}

.code-wrapper {
  margin-left: 3rem; /* Indent under the text */
}

/* Next Steps Box */
.next-steps-card {
  margin-top: 2rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.02);
}

.card-icon { font-size: 3rem; }
.card-text h3 { margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 800; }
.card-text p { margin: 0; color: #64748b; font-size: 1.05rem; max-width: 400px; }

</style>
