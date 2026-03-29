<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

// Navbar 1 state
const n1Open = ref(null);
const setN1 = (menu) => { n1Open.value = n1Open.value === menu ? null : menu; };

// Navbar 2 state
const n2Open = ref(null);
const n2MobileOpen = ref(false);

// Navbar 3 (multi-level)
const n3Open = ref(null);
const n3Sub = ref(null);

const closeAll = () => { n1Open.value = null; n2Open.value = null; n3Open.value = null; n3Sub.value = null; };
onMounted(() => document.addEventListener('click', closeAll));
onUnmounted(() => document.removeEventListener('click', closeAll));
const stopProp = (e) => e.stopPropagation();

const navbar1Code = `<script setup>
import { ref } from 'vue';
const open = ref(null);
<\/script>

<template>
  <nav class="navbar">
    <div class="logo">BrandUI</div>
    <ul class="nav-menu">
      <li class="has-dropdown" @click="open = open === 'products' ? null : 'products'">
        Products <span>▾</span>
        <ul v-if="open === 'products'" class="dropdown">
          <li>Analytics</li>
          <li>Automation</li>
          <li>Reports</li>
        </ul>
      </li>
      <li>Pricing</li>
      <li>Blog</li>
    </ul>
    <button class="cta">Get Started</button>
  </nav>
</template>`;

const navbar2Code = `<template>
  <nav class="navbar-glass">
    <div class="logo">Pure<span>Vue</span></div>
    <ul class="nav-links">
      <li class="has-mega">
        Solutions ▾
        <div class="mega-menu">
          <div class="mega-col">
            <h4>By Use Case</h4>
            <a>Marketing</a>
            <a>Operations</a>
          </div>
          <div class="mega-col">
            <h4>By Team</h4>
            <a>Developers</a>
            <a>Designers</a>
          </div>
        </div>
      </li>
      <li>Pricing</li>
    </ul>
  </nav>
</template>`;

const navbar3Code = `<template>
  <!-- Multi-level dropdown -->
  <nav>
    <ul>
      <li class="has-dropdown">
        Services ▾
        <ul class="dropdown">
          <li>Design</li>
          <li class="has-sub">
            Development ▸
            <ul class="sub-menu">
              <li>Frontend</li>
              <li>Backend</li>
              <li>Mobile</li>
            </ul>
          </li>
          <li>Consulting</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Navbars</h1>
    <p class="page-description">Modern navigation bars with dropdowns, mega menus, and multi-level submenus.</p>
  </div>

  <!-- Navbar 1: Modern Light + Dropdown -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Modern Light — With Dropdown</SubTitle>
      <button @click="toggle('n1')" class="btn-toggle-code">{{ show['n1'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <nav class="nb1" @click.stop>
        <div class="nb1-inner">
          <div class="nb1-left">
            <div class="nb1-logo">Brand<span>UI</span></div>
          </div>
          <ul class="nb1-links">
            <li class="nb1-item" @click="setN1('products')">
              <span>Products <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
              <div v-if="n1Open === 'products'" class="nb1-dropdown">
                <a class="dd-item"><div class="dd-icon" style="background:rgba(79,70,229,0.1);color:#4f46e5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/></svg></div><div><strong>Analytics</strong><span>Understand your data</span></div></a>
                <a class="dd-item"><div class="dd-icon" style="background:rgba(13,148,136,0.1);color:#0d9488"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><div><strong>Automation</strong><span>Streamline workflows</span></div></a>
                <a class="dd-item"><div class="dd-icon" style="background:rgba(249,115,22,0.1);color:#f97316"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16"/><polyline points="14 2 14 8 20 8"/></svg></div><div><strong>Reports</strong><span>Export & share results</span></div></a>
              </div>
            </li>
            <li class="nb1-item" @click="setN1('solutions')">
              <span>Solutions <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
              <div v-if="n1Open === 'solutions'" class="nb1-dropdown">
                <a class="dd-item"><div class="dd-icon" style="background:rgba(139,92,246,0.1);color:#8b5cf6"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div><div><strong>For Teams</strong><span>Collaborate at scale</span></div></a>
                <a class="dd-item"><div class="dd-icon" style="background:rgba(236,72,153,0.1);color:#ec4899"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div><strong>Enterprise</strong><span>Dedicated support</span></div></a>
              </div>
            </li>
            <li class="nb1-item plain"><span>Pricing</span></li>
            <li class="nb1-item plain"><span>Blog</span></li>
          </ul>
          <div class="nb1-actions">
            <button class="nb1-login">Log in</button>
            <button class="nb1-cta">Get Started →</button>
          </div>
        </div>
      </nav>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['n1']" :code="navbar1Code" language="html" /></transition>
  </section>

  <!-- Navbar 2: Dark Glass + Mega Menu -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Dark Glassmorphic — With Mega Menu</SubTitle>
      <button @click="toggle('n2')" class="btn-toggle-code">{{ show['n2'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad dark-bg">
      <nav class="nb2" @click.stop>
        <div class="nb2-inner">
          <div class="nb2-logo">Pure<span>Vue</span></div>
          <ul class="nb2-links">
            <li class="nb2-item" @click="n2Open = n2Open === 'solutions' ? null : 'solutions'">
              Solutions <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              <div v-if="n2Open === 'solutions'" class="nb2-mega">
                <div class="mega-col">
                  <h4>By Use Case</h4>
                  <a class="mega-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Marketing Analytics</a>
                  <a class="mega-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>Automation</a>
                  <a class="mega-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/></svg>Integrations</a>
                </div>
                <div class="mega-col">
                  <h4>By Team</h4>
                  <a class="mega-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Developers</a>
                  <a class="mega-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>Designers</a>
                  <a class="mega-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Operations</a>
                </div>
                <div class="mega-cta-col">
                  <div class="mega-cta-card">
                    <strong>New in 2026</strong>
                    <p>AI-powered insights for every team</p>
                    <a>Learn more →</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nb2-item plain">Pricing</li>
            <li class="nb2-item plain">Docs</li>
            <li class="nb2-item plain">Blog</li>
          </ul>
          <div class="nb2-actions">
            <button class="nb2-login">Sign in</button>
            <button class="nb2-cta">Start Free Trial</button>
          </div>
        </div>
      </nav>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['n2']" :code="navbar2Code" language="html" /></transition>
  </section>

  <!-- Navbar 3: Multi-level Dropdown -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Minimal Dark — Multi-Level Dropdown</SubTitle>
      <button @click="toggle('n3')" class="btn-toggle-code">{{ show['n3'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <nav class="nb3" @click.stop>
        <div class="nb3-inner">
          <div class="nb3-logo">
            <div class="nb3-logo-dot"></div>
            <span>Nexus</span>
          </div>
          <ul class="nb3-links">
            <li class="nb3-item" @click="n3Open = n3Open === 'services' ? null : 'services'; n3Sub = null">
              <span>Services <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
              <ul v-if="n3Open === 'services'" class="nb3-dropdown" @click.stop>
                <li class="nb3-dd-item plain">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  Design
                </li>
                <li class="nb3-dd-item has-sub" @mouseenter="n3Sub = 'dev'" @mouseleave="n3Sub = null">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  Development
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
                  <ul v-if="n3Sub === 'dev'" class="nb3-sub">
                    <li class="nb3-sub-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      Frontend
                    </li>
                    <li class="nb3-sub-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                      Backend
                    </li>
                    <li class="nb3-sub-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                      Mobile Apps
                    </li>
                    <li class="nb3-sub-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                      DevOps / Cloud
                    </li>
                  </ul>
                </li>
                <li class="nb3-dd-item has-sub" @mouseenter="n3Sub = 'consulting'" @mouseleave="n3Sub = null">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Consulting
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
                  <ul v-if="n3Sub === 'consulting'" class="nb3-sub">
                    <li class="nb3-sub-item">Strategy</li>
                    <li class="nb3-sub-item">Audit & Review</li>
                    <li class="nb3-sub-item">Training</li>
                  </ul>
                </li>
                <li class="nb3-dd-item plain">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  SEO & Marketing
                </li>
              </ul>
            </li>
            <li class="nb3-item" @click="n3Open = n3Open === 'company' ? null : 'company'; n3Sub = null">
              <span>Company <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
              <ul v-if="n3Open === 'company'" class="nb3-dropdown" @click.stop>
                <li class="nb3-dd-item plain">About Us</li>
                <li class="nb3-dd-item plain">Careers <span class="hiring-badge">Hiring</span></li>
                <li class="nb3-dd-item plain">Press</li>
                <li class="nb3-dd-item plain">Contact</li>
              </ul>
            </li>
            <li class="nb3-item plain"><span>Portfolio</span></li>
            <li class="nb3-item plain"><span>Blog</span></li>
          </ul>
          <div class="nb3-actions">
            <button class="nb3-login">Sign In</button>
            <button class="nb3-cta">Book a Call</button>
          </div>
        </div>
      </nav>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['n3']" :code="navbar3Code" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { border-radius: 12px; border: 1px dashed #cbd5e1; overflow: visible; position: relative;}
.preview-area.no-pad { padding: 0; }
.preview-area.dark-bg { background: #0f172a; border-color: transparent; }
.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* ============ NAVBAR 1: Modern Light ============ */
.nb1 { background: white; border-radius: 12px; }
.nb1-inner { display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; height: 64px; gap: 2rem; }
.nb1-logo { font-size: 1.3rem; font-weight: 900; letter-spacing: -0.03em; color: var(--dark-color); }
.nb1-logo span { color: var(--primary-color); }
.nb1-links { display: flex; list-style: none; padding: 0; margin: 0; gap: 0.25rem; }
.nb1-item { position: relative; padding: 0.5rem 0.85rem; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 500; color: var(--text-main); transition: background 0.2s; user-select: none; }
.nb1-item:hover { background: var(--light-color); }
.nb1-item span { display: flex; align-items: center; gap: 0.3rem; white-space: nowrap; }
.nb1-item.plain { color: var(--text-muted); }

.nb1-dropdown { position: absolute; top: calc(100% + 8px); left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 0.75rem; min-width: 280px; box-shadow: 0 20px 40px rgba(0,0,0,0.12); z-index: 100; }
.dd-item { display: flex; align-items: center; gap: 0.85rem; padding: 0.75rem; border-radius: 10px; cursor: pointer; transition: background 0.15s; text-decoration: none; color: inherit; }
.dd-item:hover { background: var(--light-color); }
.dd-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.dd-item div strong { display: block; font-size: 0.9rem; font-weight: 700; color: var(--dark-color); }
.dd-item div span { display: block; font-size: 0.8rem; color: var(--text-muted); }

.nb1-actions { display: flex; gap: 0.75rem; align-items: center; }
.nb1-login { background: none; border: none; font-weight: 600; color: var(--text-muted); cursor: pointer; padding: 0.5rem 0.75rem; border-radius: 8px; font-size: 0.9rem; transition: color 0.2s; }
.nb1-login:hover { color: var(--dark-color); }
.nb1-cta { background: var(--primary-color); color: white; border: none; border-radius: 10px; padding: 0.6rem 1.2rem; font-weight: 700; font-size: 0.9rem; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
.nb1-cta:hover { background: var(--primary-dark); transform: translateY(-1px); }

/* ============ NAVBAR 2: Dark Glass + Mega ============ */
.nb2 { border-radius: 12px; }
.nb2-inner { display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; height: 64px; gap: 2rem; position: relative; }
.nb2-logo { font-size: 1.3rem; font-weight: 900; letter-spacing: -0.03em; color: white; }
.nb2-logo span { color: var(--primary-light); }
.nb2-links { display: flex; list-style: none; padding: 0; margin: 0; gap: 0.25rem; }
.nb2-item { position: relative; padding: 0.5rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 500; color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 0.3rem; transition: all 0.2s; user-select: none; }
.nb2-item:hover { background: rgba(255,255,255,0.08); color: white; }
.nb2-item.plain { cursor: pointer; }

.nb2-mega { position: absolute; top: calc(100% + 8px); left: -100px; background: rgba(15,23,42,0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 1.5rem; display: flex; gap: 1.5rem; min-width: 560px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); z-index: 100; }
.mega-col { min-width: 160px; }
.mega-col h4 { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 0.75rem; }
.mega-link { display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem 0.75rem; border-radius: 8px; color: rgba(255,255,255,0.7); font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.15s; white-space: nowrap; }
.mega-link:hover { background: rgba(255,255,255,0.06); color: white; }
.mega-cta-col { border-left: 1px solid rgba(255,255,255,0.08); padding-left: 1.5rem; min-width: 180px; }
.mega-cta-card { background: linear-gradient(135deg, rgba(79,70,229,0.3), rgba(129,140,248,0.15)); border-radius: 14px; padding: 1.25rem; border: 1px solid rgba(79,70,229,0.3); }
.mega-cta-card strong { display: block; color: white; font-size: 0.9rem; margin-bottom: 0.5rem; }
.mega-cta-card p { color: rgba(255,255,255,0.6); font-size: 0.8rem; line-height: 1.4; margin: 0 0 0.75rem; }
.mega-cta-card a { color: var(--primary-light); font-size: 0.85rem; font-weight: 600; cursor: pointer; }

.nb2-actions { display: flex; gap: 0.75rem; align-items: center; }
.nb2-login { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); border-radius: 8px; padding: 0.5rem 1rem; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; }
.nb2-login:hover { background: rgba(255,255,255,0.12); color: white; }
.nb2-cta { background: linear-gradient(135deg, var(--primary-color), #818cf8); color: white; border: none; border-radius: 10px; padding: 0.6rem 1.2rem; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.nb2-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,70,229,0.4); }

/* ============ NAVBAR 3: Multi-Level ============ */
.nb3 { background: #1e293b; border-radius: 12px; }
.nb3-inner { display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; height: 64px; gap: 2rem; }
.nb3-logo { display: flex; align-items: center; gap: 0.65rem; }
.nb3-logo-dot { width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(135deg, var(--primary-color), #818cf8); flex-shrink: 0; }
.nb3-logo span { font-size: 1.2rem; font-weight: 800; color: white; letter-spacing: -0.025em; }
.nb3-links { display: flex; list-style: none; padding: 0; margin: 0; gap: 0.25rem; }
.nb3-item { position: relative; padding: 0.5rem 0.85rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; font-weight: 500; color: rgba(255,255,255,0.65); transition: all 0.2s; user-select: none; }
.nb3-item span { display: flex; align-items: center; gap: 0.3rem; }
.nb3-item:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.9); }
.nb3-item.plain:hover { color: white; }

.nb3-dropdown { position: absolute; top: calc(100% + 8px); left: 0; list-style: none; padding: 0.5rem; margin: 0; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; min-width: 220px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); z-index: 100; }
.nb3-dd-item { position: relative; display: flex; align-items: center; gap: 0.65rem; padding: 0.7rem 0.85rem; border-radius: 8px; color: rgba(255,255,255,0.65); font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.15s; white-space: nowrap; }
.nb3-dd-item:hover { background: rgba(255,255,255,0.06); color: white; }
.nb3-dd-item.has-sub { justify-content: flex-start; }
.nb3-dd-item.has-sub .chevron-right { margin-left: auto; }
.nb3-dd-item.has-sub:hover { color: var(--primary-light); }

.nb3-sub { position: absolute; left: calc(100% + 8px); top: -0.5rem; list-style: none; padding: 0.5rem; margin: 0; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; min-width: 200px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); z-index: 101; }
.nb3-sub-item { display: flex; align-items: center; gap: 0.65rem; padding: 0.65rem 0.85rem; border-radius: 8px; color: rgba(255,255,255,0.6); font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.15s; }
.nb3-sub-item:hover { background: rgba(79,70,229,0.2); color: var(--primary-light); }

.nb3-actions { display: flex; gap: 0.75rem; align-items: center; }
.nb3-login { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); border-radius: 8px; padding: 0.5rem 1rem; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.nb3-login:hover { border-color: rgba(255,255,255,0.3); color: white; }
.nb3-cta { background: var(--primary-color); color: white; border: none; border-radius: 10px; padding: 0.6rem 1.2rem; font-weight: 700; font-size: 0.875rem; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
.nb3-cta:hover { background: var(--primary-dark); transform: translateY(-1px); }

.hiring-badge { background: #22c55e; color: white; font-size: 0.65rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 99px; margin-left: auto; }

/* Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 600px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
