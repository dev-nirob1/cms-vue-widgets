<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="coming-soon-page">
    <div class="content-wrapper reveal-up">
      <div class="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      </div>
      
      <h1 class="title">Coming <span class="text-gradient">Soon</span></h1>
      <p class="description">
        We're working hard to bring you a comprehensive guide and advanced documentation. 
        Stay tuned for the full release of Zems UI documentation.
      </p>

      <div class="status-badge">Development in Progress</div>

      <div class="actions">
        <RouterLink to="/" class="btn btn-primary">
          Back to Introduction
        </RouterLink>
        <RouterLink to="/button" class="btn btn-glass">
          Explore Components
        </RouterLink>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="bg-glow"></div>
  </div>
</template>

<style scoped>
.coming-soon-page {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  max-width: 600px;
  z-index: 2;
}

.icon-circle {
  width: 100px;
  height: 100px;
  background: var(--light-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: var(--primary-color);
  border: 1px solid rgba(79, 70, 229, 0.1);
  box-shadow: var(--shadow-md);
}

.title {
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  color: var(--dark-color);
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.status-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(79, 70, 229, 0.05);
  color: var(--primary-color);
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.9rem;
  border: 1px solid rgba(79, 70, 229, 0.2);
  margin-bottom: 3rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.reveal-up {
  opacity: 0;
  animation: revealUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
</style>
