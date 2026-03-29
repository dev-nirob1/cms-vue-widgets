<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="landing-page">
    
    <!-- Hero Section -->
    <section class="hero-container relative">
      <!-- Decorative Background Grid -->
      <div class="absolute inset-0 grid-bg pointer-events-none"></div>
      
      <!-- Decorative Glowing Orbs -->
      <div class="glow-orb primary"></div>
      <div class="glow-orb secondary"></div>

      <div class="relative z-10 hero-content text-center">
        <a href="https://github.com" target="_blank" class="release-badge">
          <span class="badge-pill new">New</span>
          <span>v1.0.0 is officially live</span>
          <svg class="chevron-right" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
        </a>

        <h1 class="hero-title">
          Build your next idea <br class="hide-mobile" />
          <span class="text-gradient">even faster.</span>
        </h1>
        
        <p class="hero-subtitle">
          Beautifully designed, expertly crafted Vue UI components. Ready to copy and paste into your next project. Zero dependencies required.
        </p>
        
        <div class="hero-buttons">
          <RouterLink to="/components" class="btn btn-primary btn-lg">
            Browse Components
          </RouterLink>
          <RouterLink to="/installation" class="btn btn-secondary btn-lg btn-outline">
            Read Documentation
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="arrow"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="feature-header">
        <h2 class="section-title">Everything you need to ship.</h2>
        <p class="section-subtitle">A massive selection of responsive, accessible, and lightweight components designed for modern web applications.</p>
      </div>
      
      <div class="feature-grid">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="icon-square color-indigo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <h3 class="card-title">17 Component Families</h3>
          <p class="card-text">Every foundational piece you need: tables, navbars, modals, and tooltips. Carefully constructed for maximum modularity.</p>
        </div>
        
        <!-- Feature 2 -->
        <div class="feature-card">
          <div class="icon-square color-emerald">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3 class="card-title">Pure Vue & CSS</h3>
          <p class="card-text">No bloated dependencies. We rely strictly on modern CSS and Vue 3 reactivity to handle complex states and animations natively.</p>
        </div>
        
        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="icon-square color-sky">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          </div>
          <h3 class="card-title">Responsive by Default</h3>
          <p class="card-text">Every component is meticulously tested to break down gracefully on mobile screens, tablets, and massive 4K monitors.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Scoped Layout Frame */
.landing-page {
  /* Override the main-layout padding restriction to allow the Hero to breathe */
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding-bottom: 4rem;
}

/* ==================================
   HERO SECTION
   ================================== */
.hero-container {
  padding-top: 5rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.relative { position: relative; }
.absolute { position: absolute; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.pointer-events-none { pointer-events: none; }
.z-10 { z-index: 10; }

/* Grid Pattern Background */
.grid-bg {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%);
}

/* Ambient Glow Orbs */
.glow-orb {
  position: absolute;
  width: 40vw;
  height: 40vw;
  max-width: 600px;
  max-height: 600px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}
.glow-orb.primary { top: -10%; left: -10%; background: var(--primary-color); }
.glow-orb.secondary { bottom: -10%; right: -10%; background: #0ea5e9; }

/* Hero Text & Spacing */
.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

/* Version Pill */
.release-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.35rem 0.5rem 0.35rem 0.35rem;
  background: rgba(79, 70, 229, 0.05);
  border: 1px solid rgba(79, 70, 229, 0.15);
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #4338ca;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.05);
}

.release-badge:hover {
  background: rgba(79, 70, 229, 0.08);
  border-color: rgba(79, 70, 229, 0.3);
  transform: translateY(-1px);
}

.badge-pill.new {
  background: var(--primary-color);
  color: white;
  padding: 0.1rem 0.6rem;
  border-radius: 9999px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.7rem;
}

.chevron-right { width: 16px; height: 16px; color: #6366f1; }

/* Extreme Typography */
.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #0f172a;
  margin: 0 0 1.5rem 0;
  font-family: 'Inter', var(--roboto-font);
}

.text-gradient {
  background: linear-gradient(to right, var(--primary-color), #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #64748b;
  max-width: 650px;
  margin: 0 0 2.5rem 0;
}

/* Buttons */
.hero-buttons {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.btn-lg {
  padding: 0.875rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 10px;
}

.btn-outline {
  background: white;
  color: #0f172a;
  border: 1px solid #cbd5e1;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: #94a3b8;
  color: #0f172a;
}

.btn-outline .arrow { width: 18px; height: 18px; transition: transform 0.2s;}
.btn-outline:hover .arrow { transform: translateX(2px); }

/* ==================================
   FEATURES SECTION
   ================================== */
.features-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-header {
  max-width: 600px;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0f172a;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
}

/* Feature Grid Cards */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.feature-card {
  text-align: left;
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 10px 15px -3px rgba(0,0,0,0.02);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01);
  border-color: #e2e8f0;
}

.icon-square {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.color-indigo { background: #e0e7ff; color: #4338ca; }
.color-emerald { background: #d1fae5; color: #047857; }
.color-sky { background: #e0f2fe; color: #0369a1; }

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
}

.card-text {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

/* Mobile Breaking points */
@media (max-width: 1024px) {
  .feature-grid { grid-template-columns: repeat(2, 1fr); }
  .hide-mobile { display: none; }
}

@media (max-width: 640px) {
  .hero-buttons { flex-direction: column; width: 100%; }
  .btn-lg { width: 100%; }
  .feature-grid { grid-template-columns: 1fr; }
  .hero-container { padding-top: 2rem; }
}
</style>
