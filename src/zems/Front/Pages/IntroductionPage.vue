<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="introduction-page">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content reveal-up">
        <div class="hero-badge">v1.2.0 is out!</div>
        <h1 class="hero-title">
          Build <span class="text-gradient">Faster</span>.
          <br />
          Design <span class="text-gradient">Smarter</span>.
        </h1>
        <p class="hero-subtitle">
          A high-performance UI toolkit for Vue 3 that strikes the perfect balance
          between flexibility and out-of-the-box aesthetics. Ready for your next SAAS.
        </p>
        <div class="hero-actions">
          <RouterLink to="/installation" class="btn btn-primary">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </RouterLink>
          <a href="https://github.com" target="_blank" class="btn btn-glass">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Star on GitHub
          </a>
        </div>
      </div>
      
      <!-- Abstract Illustration -->
      <div class="hero-visual reveal-right">
        <div class="visual-stack">
          <div class="visual-card card-1 shadow-lg"></div>
          <div class="visual-card card-2 shadow-lg"></div>
          <div class="visual-card card-3 shadow-lg"></div>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-title-wrapper reveal-up">
        <h2 class="section-title">Designed for Modern Teams</h2>
        <p class="section-subtitle">Focus on your business logic, we'll take care of the pixels.</p>
      </div>

      <div class="features-grid">
        <div class="feature-card reveal-up" style="--d: 0.1s">
          <div class="feature-icon bg-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <h3>Component First</h3>
          <p>Dozens of pre-built, production-ready components that you can easily drop into any project.</p>
        </div>

        <div class="feature-card reveal-up" style="--d: 0.2s">
          <div class="feature-icon bg-purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
          </div>
          <h3>Themable</h3>
          <p>Fully customizable styles using CSS variables. Change your entire brand kit in seconds.</p>
        </div>

        <div class="feature-card reveal-up" style="--d: 0.3s">
          <div class="feature-icon bg-teal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </div>
          <h3>Responsive</h3>
          <p>Built with responsiveness at its core. Every component works beautifully on mobile gadgets.</p>
        </div>

        <div class="feature-card reveal-up" style="--d: 0.4s">
          <div class="feature-icon bg-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          </div>
          <h3>Accessible</h3>
          <p>ARIA compliance and keyboard navigation support out-of-the-box for a better inclusive web.</p>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="quick-start-section reveal-up">
      <div class="glass-cta">
        <div class="cta-content">
          <h2>Ready to get started?</h2>
          <p>Import Zems UI and start building your dream interface today.</p>
        </div>
        <RouterLink to="/button" class="btn btn-primary btn-lg">Explore Components</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.introduction-page {
  padding-bottom: 5rem;
}

/* HERO SECTION */
.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 4rem 0 6rem;
  overflow: hidden;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary-color);
  border-radius: 99px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(79, 70, 229, 0.2);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  color: var(--dark-color);
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

/* HERO VISUALS */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-stack {
  position: relative;
  width: 400px;
  height: 400px;
}

.visual-card {
  position: absolute;
  border-radius: 20px;
  background: white;
  border: 1px solid var(--light-color);
}

.card-1 {
  width: 300px;
  height: 200px;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, white, #f1f5f9);
  z-index: 3;
  transform: rotate(-5deg);
}

.card-2 {
  width: 250px;
  height: 150px;
  top: 100px;
  left: 0;
  background: white;
  z-index: 2;
  transform: rotate(10deg);
  opacity: 0.8;
}

.card-3 {
  width: 320px;
  height: 220px;
  bottom: 0;
  right: 50px;
  background: var(--primary-color);
  opacity: 0.1;
  z-index: 1;
  transform: rotate(-2deg);
}

/* FEATURES SECTION */
.features-section {
  margin-top: 4rem;
}

.section-title-wrapper {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem;
  background: white;
  border-radius: 24px;
  border: 1px solid var(--light-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-light);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
}

.bg-blue { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
.bg-purple { background: linear-gradient(135deg, #a855f7, #6b21a8); }
.bg-teal { background: linear-gradient(135deg, #14b8a6, #0f766e); }
.bg-orange { background: linear-gradient(135deg, #f97316, #ea580c); }

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

/* QUICK START */
.quick-start-section {
  margin-top: 8rem;
}

.glass-cta {
  padding: 4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  color: white;
  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.3);
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  opacity: 0.9;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-visual {
    margin-top: 2rem;
  }
  
  .glass-cta {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
}

/* Reveal Animations */
.reveal-up {
  opacity: 0;
  animation: revealUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--d, 0s);
}

.reveal-right {
  opacity: 0;
  animation: revealRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes revealRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
