<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const profileCardCode = `<div class="profile-card">
  <div class="cover"></div>
  <img class="avatar" src="..." alt="Avatar" />
  <h3>Sarah Johnson</h3>
  <p>Senior Product Designer</p>
  <div class="tags">
    <span>UI/UX</span><span>Figma</span><span>Vue</span>
  </div>
  <button class="follow-btn">Follow</button>
</div>`;

const productCardCode = `<div class="product-card">
  <div class="img-wrap">
    <img src="..." alt="Product" />
    <span class="badge">New</span>
  </div>
  <div class="info">
    <h3>Premium Sneakers</h3>
    <p>Limited edition street wear</p>
    <div class="price-row">
      <span class="price">$129</span>
      <button>Add to Cart</button>
    </div>
  </div>
</div>`;

const pricingCardCode = `<div class="pricing-card featured">
  <div class="plan-badge">Most Popular</div>
  <h3>Pro Plan</h3>
  <div class="price">
    <span class="amount">$49</span>
    <span class="period">/month</span>
  </div>
  <ul class="features">
    <li>Unlimited projects</li>
    <li>Priority support</li>
  </ul>
  <button>Get Started</button>
</div>`;

const statsCardCode = `<div class="stats-card">
  <div class="icon-wrap blue">
    <svg .../> <!-- Icon here -->
  </div>
  <div class="details">
    <span class="value">24,521</span>
    <span class="label">Total Users</span>
    <span class="trend up">+12.5%</span>
  </div>
</div>`;

const blogCardCode = `<div class="blog-card">
  <div class="thumb">
    <img src="..." alt="Blog cover" />
    <span class="category">Design</span>
  </div>
  <div class="content">
    <h3>The Future of UI Design</h3>
    <p>A deep dive into design trends...</p>
    <div class="meta">
      <img class="author-img" src="..." />
      <span>John Doe · 5 min read</span>
    </div>
  </div>
</div>`;

const testimonialCode = `<div class="tcard">
  <div class="stars">★★★★★</div>
  <blockquote>
    "This product completely transformed how our team works"
  </blockquote>
  <div class="author">
    <img src="..." class="avatar" />
    <div>
      <strong>Emily Clark</strong>
      <span>CEO, Acme Corp</span>
    </div>
  </div>
</div>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Cards</h1>
    <p class="page-description">A rich set of card components for any layout — profiles, products, pricing, stats, and more.</p>
  </div>

  <!-- Profile Cards -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Profile Cards</SubTitle>
      <button @click="toggle('profile')" class="btn-toggle-code">{{ show['profile'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="cards-grid col-3">
        <!-- Card 1 -->
        <div class="profile-card">
          <div class="cover" style="background: linear-gradient(135deg, #4f46e5, #818cf8)"></div>
          <div class="avatar-wrap">
            <div class="avatar-circle" style="background: linear-gradient(135deg, #f97316, #fb923c)">SJ</div>
          </div>
          <div class="profile-body">
            <h3>Sarah Johnson</h3>
            <p>Senior Product Designer</p>
            <div class="tags"><span>UI/UX</span><span>Figma</span><span>Vue</span></div>
            <button class="follow-btn">Follow</button>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="profile-card">
          <div class="cover" style="background: linear-gradient(135deg, #0d9488, #14b8a6)"></div>
          <div class="avatar-wrap">
            <div class="avatar-circle" style="background: linear-gradient(135deg, #6366f1, #818cf8)">MK</div>
          </div>
          <div class="profile-body">
            <h3>Mark Kim</h3>
            <p>Full Stack Developer</p>
            <div class="tags"><span>Vue</span><span>Node.js</span><span>AWS</span></div>
            <button class="follow-btn">Follow</button>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="profile-card">
          <div class="cover" style="background: linear-gradient(135deg, #ec4899, #f43f5e)"></div>
          <div class="avatar-wrap">
            <div class="avatar-circle" style="background: linear-gradient(135deg, #0d9488, #14b8a6)">AL</div>
          </div>
          <div class="profile-body">
            <h3>Amy Lee</h3>
            <p>Brand Strategist</p>
            <div class="tags"><span>Branding</span><span>Motion</span></div>
            <button class="follow-btn">Follow</button>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['profile']" :code="profileCardCode" language="html" /></transition>
  </section>

  <!-- Product Cards -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Product Cards</SubTitle>
      <button @click="toggle('product')" class="btn-toggle-code">{{ show['product'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="cards-grid col-3">
        <div class="product-card">
          <div class="product-img" style="background: linear-gradient(135deg, #e0e7ff, #c7d2fe)">
            <div class="product-icon">👟</div>
            <span class="p-badge new">New</span>
          </div>
          <div class="product-info">
            <h3>Air Boost Pro</h3>
            <p>Limited edition street wear</p>
            <div class="price-row">
              <span class="price">$129</span>
              <button class="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img" style="background: linear-gradient(135deg, #dcfce7, #bbf7d0)">
            <div class="product-icon">🎧</div>
            <span class="p-badge sale">-20%</span>
          </div>
          <div class="product-info">
            <h3>Studio Headphones</h3>
            <p>Noise cancelling, studio grade</p>
            <div class="price-row">
              <span class="price">$249 <s class="old-price">$319</s></span>
              <button class="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img" style="background: linear-gradient(135deg, #fef9c3, #fde68a)">
            <div class="product-icon">⌚</div>
          </div>
          <div class="product-info">
            <h3>Smart Watch X</h3>
            <p>Health & fitness tracking</p>
            <div class="price-row">
              <span class="price">$399</span>
              <button class="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['product']" :code="productCardCode" language="html" /></transition>
  </section>

  <!-- Pricing Cards -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Pricing Cards</SubTitle>
      <button @click="toggle('pricing')" class="btn-toggle-code">{{ show['pricing'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="cards-grid col-3">
        <div class="pricing-card">
          <h3>Starter</h3>
          <div class="pricing-amount"><span class="big">$0</span><span>/mo</span></div>
          <ul class="feat-list">
            <li>✓ 5 Projects</li><li>✓ 2GB Storage</li><li>✓ Community support</li><li class="dim">✗ Analytics</li>
          </ul>
          <button class="price-btn outline">Get Started</button>
        </div>
        <div class="pricing-card featured">
          <div class="pop-badge">Most Popular</div>
          <h3>Pro</h3>
          <div class="pricing-amount"><span class="big">$49</span><span>/mo</span></div>
          <ul class="feat-list">
            <li>✓ Unlimited Projects</li><li>✓ 50GB Storage</li><li>✓ Priority support</li><li>✓ Full Analytics</li>
          </ul>
          <button class="price-btn solid">Get Started</button>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="pricing-amount"><span class="big">$199</span><span>/mo</span></div>
          <ul class="feat-list">
            <li>✓ Unlimited everything</li><li>✓ 1TB Storage</li><li>✓ Dedicated support</li><li>✓ Custom integrations</li>
          </ul>
          <button class="price-btn outline">Contact Sales</button>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['pricing']" :code="pricingCardCode" language="html" /></transition>
  </section>

  <!-- Stats Cards -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Stats Cards</SubTitle>
      <button @click="toggle('stats')" class="btn-toggle-code">{{ show['stats'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="cards-grid col-4">
        <div class="stats-card">
          <div class="stat-icon" style="background:rgba(79,70,229,0.1);color:#4f46e5">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">24,521</span>
            <span class="stat-label">Total Users</span>
          </div>
          <span class="stat-trend up">↑ 12.5%</span>
        </div>
        <div class="stats-card">
          <div class="stat-icon" style="background:rgba(13,148,136,0.1);color:#0d9488">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">$84,200</span>
            <span class="stat-label">Revenue</span>
          </div>
          <span class="stat-trend up">↑ 8.2%</span>
        </div>
        <div class="stats-card">
          <div class="stat-icon" style="background:rgba(249,115,22,0.1);color:#f97316">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">98.3%</span>
            <span class="stat-label">Uptime</span>
          </div>
          <span class="stat-trend up">↑ 0.1%</span>
        </div>
        <div class="stats-card">
          <div class="stat-icon" style="background:rgba(239,68,68,0.1);color:#ef4444">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">1.8s</span>
            <span class="stat-label">Avg. Response</span>
          </div>
          <span class="stat-trend down">↓ 0.3s</span>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['stats']" :code="statsCardCode" language="html" /></transition>
  </section>

  <!-- Blog Cards -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Blog / Article Cards</SubTitle>
      <button @click="toggle('blog')" class="btn-toggle-code">{{ show['blog'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="cards-grid col-3">
        <div class="blog-card">
          <div class="blog-thumb" style="background: linear-gradient(135deg, #4f46e5 30%, #818cf8)">
            <span class="cat-badge">Design</span>
          </div>
          <div class="blog-body">
            <h3>The Future of UI Design in 2026</h3>
            <p>A deep dive into emerging trends reshaping how we build digital experiences.</p>
            <div class="blog-meta">
              <div class="blog-author">JD</div>
              <span>John Doe · 5 min read</span>
            </div>
          </div>
        </div>
        <div class="blog-card">
          <div class="blog-thumb" style="background: linear-gradient(135deg, #0d9488 30%, #14b8a6)">
            <span class="cat-badge">Development</span>
          </div>
          <div class="blog-body">
            <h3>Vue 4 Performance Deep Dive</h3>
            <p>How the new reactivity system makes your apps 3x faster out of the box.</p>
            <div class="blog-meta">
              <div class="blog-author" style="background:#0d9488">AJ</div>
              <span>Alex J · 8 min read</span>
            </div>
          </div>
        </div>
        <div class="blog-card">
          <div class="blog-thumb" style="background: linear-gradient(135deg, #f43f5e 30%, #fb7185)">
            <span class="cat-badge">Business</span>
          </div>
          <div class="blog-body">
            <h3>Scaling Your SaaS to 10K Users</h3>
            <p>Lessons learned from scaling a solo-founder product to a global platform.</p>
            <div class="blog-meta">
              <div class="blog-author" style="background:#f43f5e">SL</div>
              <span>Sara Lee · 6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['blog']" :code="blogCardCode" language="html" /></transition>
  </section>

  <!-- Testimonial Cards -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Testimonial Cards</SubTitle>
      <button @click="toggle('testimonial')" class="btn-toggle-code">{{ show['testimonial'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="cards-grid col-3">
        <div class="tcard">
          <div class="stars">★★★★★</div>
          <blockquote>"This product completely transformed how our team collaborates. Night and day difference."</blockquote>
          <div class="tcard-author">
            <div class="tcard-avatar" style="background:linear-gradient(135deg,#4f46e5,#818cf8)">EC</div>
            <div><strong>Emily Clark</strong><span>CEO, Acme Corp</span></div>
          </div>
        </div>
        <div class="tcard">
          <div class="stars">★★★★★</div>
          <blockquote>"The component library saved us weeks of work. Quality and consistency is top-tier."</blockquote>
          <div class="tcard-author">
            <div class="tcard-avatar" style="background:linear-gradient(135deg,#0d9488,#14b8a6)">MR</div>
            <div><strong>Marcus Reid</strong><span>CTO, FinFlow</span></div>
          </div>
        </div>
        <div class="tcard">
          <div class="stars">★★★★★</div>
          <blockquote>"Unbeatable developer experience. Our design-to-dev handoff is now seamless."</blockquote>
          <div class="tcard-author">
            <div class="tcard-avatar" style="background:linear-gradient(135deg,#f43f5e,#fb7185)">NP</div>
            <div><strong>Nina Patel</strong><span>Lead Designer, Kreate</span></div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['testimonial']" :code="testimonialCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 2rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

.cards-grid { display: grid; gap: 1.5rem; }
.cards-grid.col-3 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.cards-grid.col-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }

/* PROFILE CARD */
.profile-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; transition: all 0.3s; }
.profile-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-xl); }
.cover { height: 80px; }
.avatar-wrap { display: flex; justify-content: center; margin-top: -32px; }
.avatar-circle { width: 64px; height: 64px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem; color: white; }
.profile-body { padding: 1rem 1.25rem 1.5rem; text-align: center; }
.profile-body h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem; }
.profile-body p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
.tags { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: center; margin: 1rem 0; }
.tags span { background: var(--light-color); color: var(--primary-color); font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.65rem; border-radius: 99px; }
.follow-btn { width: 100%; background: var(--primary-color); color: white; border: none; border-radius: 10px; padding: 0.65rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.follow-btn:hover { background: var(--primary-dark); }

/* PRODUCT CARD */
.product-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; transition: all 0.3s; }
.product-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-xl); }
.product-img { height: 160px; display: flex; align-items: center; justify-content: center; position: relative; }
.product-icon { font-size: 3.5rem; }
.p-badge { position: absolute; top: 12px; right: 12px; padding: 0.25rem 0.7rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700; }
.p-badge.new { background: #4f46e5; color: white; }
.p-badge.sale { background: #ef4444; color: white; }
.product-info { padding: 1.25rem; }
.product-info h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem; }
.product-info p { color: var(--text-muted); font-size: 0.875rem; margin: 0 0 1rem; }
.price-row { display: flex; align-items: center; justify-content: space-between; }
.price { font-size: 1.25rem; font-weight: 800; color: var(--dark-color); }
.old-price { font-size: 0.9rem; color: var(--text-muted); font-weight: 400; }
.cart-btn { background: var(--primary-color); color: white; border: none; border-radius: 8px; padding: 0.5rem 1rem; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; }
.cart-btn:hover { background: var(--primary-dark); transform: scale(1.03); }

/* PRICING CARD */
.pricing-card { background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2rem; text-align: center; position: relative; transition: all 0.3s; }
.pricing-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.pricing-card.featured { background: var(--primary-color); color: white; border-color: var(--primary-color); transform: scale(1.04); box-shadow: 0 20px 40px rgba(79,70,229,0.3); }
.pricing-card.featured:hover { transform: scale(1.04) translateY(-4px); }
.pop-badge { background: rgba(255,255,255,0.2); color: white; font-size: 0.75rem; font-weight: 700; padding: 0.3rem 0.8rem; border-radius: 99px; display: inline-block; margin-bottom: 1rem; }
.pricing-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; }
.pricing-amount { margin-bottom: 1.5rem; }
.big { font-size: 3rem; font-weight: 900; }
.feat-list { list-style: none; padding: 0; margin: 0 0 2rem; text-align: left; display: flex; flex-direction: column; gap: 0.6rem; color: inherit; }
.pricing-card:not(.featured) .feat-list { color: var(--text-muted); }
.feat-list .dim { opacity: 0.4; }
.price-btn { width: 100%; border: none; border-radius: 12px; padding: 0.85rem; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; }
.price-btn.solid { background: white; color: var(--primary-color); }
.price-btn.solid:hover { transform: scale(1.02); }
.price-btn.outline { background: transparent; border: 2px solid var(--primary-color); color: var(--primary-color); }
.price-btn.outline:hover { background: var(--primary-color); color: white; }

/* STATS CARD */
.stats-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; transition: all 0.3s; }
.stats-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.stat-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.stat-details { display: flex; flex-direction: column; }
.stat-value { font-size: 1.75rem; font-weight: 800; color: var(--dark-color); line-height: 1; }
.stat-label { font-size: 0.875rem; color: var(--text-muted); margin-top: 0.25rem; }
.stat-trend { font-size: 0.8rem; font-weight: 700; display: inline-block; }
.stat-trend.up { color: #22c55e; }
.stat-trend.down { color: var(--secondary-color); }

/* BLOG CARD */
.blog-card { background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; transition: all 0.3s; }
.blog-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-xl); }
.blog-thumb { height: 140px; position: relative; display: flex; align-items: flex-end; padding: 1rem; }
.cat-badge { background: rgba(255,255,255,0.2); color: white; font-size: 0.75rem; font-weight: 700; padding: 0.3rem 0.8rem; border-radius: 99px; backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.3); }
.blog-body { padding: 1.25rem; }
.blog-body h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.4; }
.blog-body p { color: var(--text-muted); font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem; }
.blog-meta { display: flex; align-items: center; gap: 0.75rem; }
.blog-author { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #4f46e5, #818cf8); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800; color: white; flex-shrink: 0; }
.blog-meta span { font-size: 0.8rem; color: var(--text-muted); }

/* TESTIMONIAL CARD */
.tcard { background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2rem; transition: all 0.3s; }
.tcard:hover { transform: translateY(-6px); box-shadow: var(--shadow-xl); border-color: var(--primary-light); }
.stars { color: #f59e0b; font-size: 1.1rem; letter-spacing: 2px; margin-bottom: 1rem; }
.tcard blockquote { font-size: 0.975rem; line-height: 1.6; color: var(--text-main); margin: 0 0 1.5rem; font-style: italic; }
.tcard-author { display: flex; align-items: center; gap: 0.75rem; }
.tcard-avatar { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.85rem; color: white; flex-shrink: 0; }
.tcard-author strong { display: block; font-size: 0.9rem; font-weight: 700; }
.tcard-author span { font-size: 0.8rem; color: var(--text-muted); }

/* Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 600px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>

