<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const footer1Code = `<footer class="footer-dark">
  <div class="footer-inner">
    <div class="brand-col">
      <div class="logo">Pure<span>Vue</span></div>
      <p>Build beautiful interfaces faster with our modern component library.</p>
      <div class="socials">
        <!-- Twitter, GitHub, LinkedIn icons -->
      </div>
    </div>
    <div class="links-col">
      <h4>Product</h4>
      <a>Features</a>
      <a>Pricing</a>
      <a>Changelog</a>
    </div>
    <!-- more columns -->
    <div class="newsletter-col">
      <h4>Stay Updated</h4>
      <div class="subscribe">
        <input placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 PureVue. All rights reserved.</p>
  </div>
</footer>`;

const footer2Code = `<footer class="footer-light">
  <div class="footer-top">
    <div class="brand">
      <div class="logo">Nexus</div>
      <p>Empowering teams to ship faster.</p>
    </div>
    <nav class="footer-nav">
      <div class="col"><h5>Company</h5>
        <a>About</a><a>Blog</a><a>Careers</a>
      </div>
      <div class="col"><h5>Legal</h5>
        <a>Privacy</a><a>Terms</a>
      </div>
    </nav>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Nexus Inc.</span>
    <div class="socials"><!-- icons --></div>
  </div>
</footer>`;

const footer3Code = `<footer class="footer-mega">
  <div class="mega-top">
    <div class="brand-area">
      <div class="logo">Brand</div>
      <p>Modern UI for modern teams.</p>
      <!-- Social icons -->
    </div>
    <div class="mega-links">
      <div v-for="col in columns" class="mega-col">
        <h4>{{ col.title }}</h4>
        <a v-for="link in col.links">{{ link }}</a>
      </div>
    </div>
  </div>
  <div class="mega-bar">
    <span>© 2026 Brand Inc. All rights reserved.</span>
    <div class="legal-links">
      <a>Privacy</a><a>Terms</a><a>Cookies</a>
    </div>
  </div>
</footer>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Footers</h1>
    <p class="page-description">Rich, responsive footer layouts from minimal to full mega-footer style.</p>
  </div>

  <!-- Footer 1: Dark Brand + Newsletter -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Dark Brand Footer</SubTitle>
      <button @click="toggle('f1')" class="btn-toggle-code">{{ show['f1'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <footer class="ft1">
        <div class="ft1-inner">
          <!-- Brand -->
          <div class="ft1-brand">
            <div class="ft1-logo">Pure<span>Vue</span></div>
            <p>Build beautiful interfaces faster with our premium Vue component library. Open source & MIT licensed.</p>
            <div class="ft1-socials">
              <a class="social-btn" title="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              <a class="social-btn" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a class="social-btn" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <!-- Links -->
          <div class="ft1-links">
            <div class="ft1-col">
              <h4>Product</h4>
              <a>Features</a><a>Pricing</a><a>Changelog</a><a>Roadmap</a>
            </div>
            <div class="ft1-col">
              <h4>Company</h4>
              <a>About</a><a>Blog</a><a>Careers <span class="badge-new">New</span></a><a>Press</a>
            </div>
            <div class="ft1-col">
              <h4>Resources</h4>
              <a>Documentation</a><a>API Reference</a><a>Status</a><a>Support</a>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="ft1-newsletter">
            <h4>Stay in the loop</h4>
            <p>Get product updates, design tips, and component releases directly in your inbox.</p>
            <div class="ft1-subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <p class="privacy-note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div class="ft1-bottom">
          <span>© 2026 PureVue. All rights reserved.</span>
          <div class="ft1-legal">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['f1']" :code="footer1Code" language="html" /></transition>
  </section>

  <!-- Footer 2: Clean Minimal Light -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Clean Minimal Footer</SubTitle>
      <button @click="toggle('f2')" class="btn-toggle-code">{{ show['f2'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <footer class="ft2">
        <div class="ft2-top">
          <div class="ft2-brand">
            <div class="ft2-logo"><div class="ft2-dot"></div>Nexus</div>
            <p>Empowering teams to build and ship faster.</p>
          </div>
          <nav class="ft2-nav">
            <div class="ft2-col">
              <h5>Product</h5>
              <a>Features</a><a>Integrations</a><a>Pricing</a><a>Roadmap</a>
            </div>
            <div class="ft2-col">
              <h5>Company</h5>
              <a>About Us</a><a>Blog</a><a>Careers</a><a>Contact</a>
            </div>
            <div class="ft2-col">
              <h5>Legal</h5>
              <a>Privacy</a><a>Terms</a><a>Cookies</a>
            </div>
          </nav>
        </div>
        <div class="ft2-bottom">
          <span>© 2026 Nexus Inc. All rights reserved.</span>
          <div class="ft2-socials">
            <a class="ft2-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a class="ft2-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a class="ft2-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['f2']" :code="footer2Code" language="html" /></transition>
  </section>

  <!-- Footer 3: Mega Footer with Gradient Top -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Mega Footer — Full Width</SubTitle>
      <button @click="toggle('f3')" class="btn-toggle-code">{{ show['f3'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <footer class="ft3">
        <!-- Gradient Banner -->
        <div class="ft3-banner">
          <div class="ft3-banner-inner">
            <div>
              <h2>Ready to build something great? </h2>
              <p>Join 12,000+ developers using PureVue to ship faster.</p>
            </div>
            <div class="ft3-banner-actions">
              <button class="ft3-btn-solid">Start for Free</button>
              <button class="ft3-btn-outline">View Demos</button>
            </div>
          </div>
        </div>

        <!-- Main links grid -->
        <div class="ft3-main">
          <div class="ft3-brand-col">
            <div class="ft3-logo">Pure<span>Vue</span></div>
            <p>The modern component library for Vue 3 developers who refuse to compromise on quality.</p>
            <div class="ft3-socials">
              <a class="ft3-s">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25z"/></svg>
              </a>
              <a class="ft3-s">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a class="ft3-s">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
            <div class="ft3-badge">MIT Licensed · Open Source</div>
          </div>

          <div class="ft3-links">
            <div class="ft3-col">
              <h4>Platform</h4>
              <a>Components</a><a>Templates</a><a>Themes</a><a>Icons</a><a>Changelog</a>
            </div>
            <div class="ft3-col">
              <h4>Developers</h4>
              <a>Docs</a><a>API Reference</a><a>GitHub</a><a>Discord</a><a>Storybook</a>
            </div>
            <div class="ft3-col">
              <h4>Company</h4>
              <a>About</a><a>Blog</a><a>Careers <span class="ft3-tag">2 open</span></a><a>Partners</a><a>Press Kit</a>
            </div>
            <div class="ft3-col">
              <h4>Support</h4>
              <a>Help Center</a><a>Community</a><a>Contact</a><a>Status <span class="ft3-status">● Live</span></a>
            </div>
          </div>
        </div>

        <div class="ft3-bottom">
          <span>© 2026 PureVue. Crafted with ❤️ for developers worldwide.</span>
          <div class="ft3-legal">
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
            <a>Cookie Preferences</a>
          </div>
        </div>
      </footer>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['f3']" :code="footer3Code" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { border-radius: 12px; border: 1px dashed #cbd5e1; overflow: hidden; }
.preview-area.no-pad { padding: 0; }
.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* ======= FOOTER 1: Dark Brand ======= */
.ft1 { background: #0f172a; color: rgba(255,255,255,0.75); }
.ft1-inner { display: grid; grid-template-columns: 1.4fr 1.6fr 1.4fr; gap: 3rem; padding: 3.5rem 3rem; }
.ft1-logo { font-size: 1.5rem; font-weight: 900; letter-spacing: -0.03em; color: white; margin-bottom: 1rem; }
.ft1-logo span { color: #818cf8; }
.ft1-brand p { font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem; }
.ft1-socials { display: flex; gap: 0.5rem; }
.social-btn { width: 36px; height: 36px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5); cursor: pointer; transition: all 0.2s; }
.social-btn:hover { background: rgba(79,70,229,0.3); border-color: rgba(79,70,229,0.4); color: white; }
.ft1-links { display: flex; gap: 2.5rem; }
.ft1-col { display: flex; flex-direction: column; gap: 0.6rem; min-width: 100px; }
.ft1-col h4 { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 0.25rem; }
.ft1-col a { font-size: 0.875rem; color: rgba(255,255,255,0.6); cursor: pointer; display: flex; align-items: center; gap: 0.4rem; transition: color 0.15s; }
.ft1-col a:hover { color: white; }
.badge-new { background: #4f46e5; color: white; font-size: 0.65rem; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; }
.ft1-newsletter h4 { font-size: 0.95rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
.ft1-newsletter > p { font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.25rem; }
.ft1-subscribe { display: flex; gap: 0; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.ft1-subscribe input { flex: 1; background: rgba(255,255,255,0.05); border: none; padding: 0.7rem 1rem; color: white; font-size: 0.875rem; outline: none; }
.ft1-subscribe input::placeholder { color: rgba(255,255,255,0.3); }
.ft1-subscribe button { background: #4f46e5; color: white; border: none; padding: 0.7rem 1.1rem; font-weight: 700; font-size: 0.85rem; cursor: pointer; white-space: nowrap; transition: background 0.2s; }
.ft1-subscribe button:hover { background: #4338ca; }
.privacy-note { font-size: 0.75rem; color: rgba(255,255,255,0.3); margin-top: 0.65rem; }
.ft1-bottom { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 3rem; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; }
.ft1-legal { display: flex; gap: 1.5rem; }
.ft1-legal a { color: rgba(255,255,255,0.35); cursor: pointer; transition: color 0.15s; }
.ft1-legal a:hover { color: rgba(255,255,255,0.7); }

/* ======= FOOTER 2: Minimal Light ======= */
.ft2 { background: white; border-top: 1px solid #e2e8f0; }
.ft2-top { display: flex; gap: 4rem; align-items: flex-start; padding: 3rem; }
.ft2-brand { max-width: 240px; flex-shrink: 0; }
.ft2-logo { display: flex; align-items: center; gap: 0.6rem; font-size: 1.3rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.75rem; letter-spacing: -0.025em; }
.ft2-dot { width: 26px; height: 26px; border-radius: 7px; background: linear-gradient(135deg, #4f46e5, #818cf8); flex-shrink: 0; }
.ft2-brand p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; }
.ft2-nav { display: flex; gap: 3rem; flex: 1; }
.ft2-col { display: flex; flex-direction: column; gap: 0.65rem; }
.ft2-col h5 { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.25rem; }
.ft2-col a { font-size: 0.875rem; color: var(--text-main); cursor: pointer; transition: color 0.15s; }
.ft2-col a:hover { color: var(--primary-color); }
.ft2-bottom { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 3rem; border-top: 1px solid #e2e8f0; font-size: 0.85rem; color: var(--text-muted); }
.ft2-socials { display: flex; gap: 0.5rem; }
.ft2-social { width: 34px; height: 34px; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); cursor: pointer; transition: all 0.2s; }
.ft2-social:hover { border-color: var(--primary-color); color: var(--primary-color); background: rgba(79,70,229,0.04); }

/* ======= FOOTER 3: Mega Footer ======= */
.ft3 { background: #0f172a; color: rgba(255,255,255,0.7); }
.ft3-banner { background: linear-gradient(135deg, #4f46e5, #818cf8, #0d9488); padding: 2.5rem 3rem; }
.ft3-banner-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.ft3-banner h2 { font-size: 1.5rem; font-weight: 800; color: white; margin-bottom: 0.4rem; }
.ft3-banner p { color: rgba(255,255,255,0.85); font-size: 0.95rem; }
.ft3-banner-actions { display: flex; gap: 1rem; flex-shrink: 0; }
.ft3-btn-solid { background: white; color: #4f46e5; border: none; border-radius: 10px; padding: 0.75rem 1.5rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 0.9rem; white-space: nowrap; }
.ft3-btn-solid:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }
.ft3-btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4); border-radius: 10px; padding: 0.75rem 1.5rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-size: 0.9rem; white-space: nowrap; }
.ft3-btn-outline:hover { border-color: white; background: rgba(255,255,255,0.1); }
.ft3-main { display: grid; grid-template-columns: 1.4fr 2.6fr; gap: 3rem; padding: 3rem; }
.ft3-logo { font-size: 1.5rem; font-weight: 900; letter-spacing: -0.03em; color: white; margin-bottom: 1rem; }
.ft3-logo span { color: #818cf8; }
.ft3-brand-col p { font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.25rem; }
.ft3-socials { display: flex; gap: 0.5rem; margin-bottom: 1.25rem; }
.ft3-s { width: 34px; height: 34px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5); cursor: pointer; transition: all 0.2s; }
.ft3-s:hover { background: rgba(79,70,229,0.3); border-color: rgba(79,70,229,0.4); color: white; }
.ft3-badge { display: inline-block; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.4); font-size: 0.75rem; font-weight: 600; padding: 0.35rem 0.85rem; border-radius: 99px; }
.ft3-links { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.ft3-col { display: flex; flex-direction: column; gap: 0.65rem; }
.ft3-col h4 { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 0.25rem; }
.ft3-col a { font-size: 0.875rem; color: rgba(255,255,255,0.6); cursor: pointer; display: flex; align-items: center; gap: 0.5rem; transition: color 0.15s; }
.ft3-col a:hover { color: white; }
.ft3-tag { background: rgba(79,70,229,0.3); color: #818cf8; font-size: 0.65rem; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; }
.ft3-status { color: #22c55e; font-size: 0.75rem; }
.ft3-bottom { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 3rem; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; }
.ft3-legal { display: flex; gap: 1.5rem; }
.ft3-legal a { color: rgba(255,255,255,0.3); cursor: pointer; transition: color 0.15s; }
.ft3-legal a:hover { color: rgba(255,255,255,0.65); }

/* Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 600px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
