<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

const loginCode = `<template>
  <div class="auth-card">
    <div class="auth-header">
      <h2>Welcome back</h2>
      <p>Please enter your details to sign in.</p>
    </div>
    
    <div class="auth-social">
      <button class="social-btn">
        <svg viewBox="0 0 24 24" width="18" height="18"><!-- Google Icon --></svg>
        Sign in with Google
      </button>
      <div class="divider"><span>or continue with email</span></div>
    </div>

    <form class="auth-form" @submit.prevent>
      <div class="input-group">
        <label>Email address</label>
        <input type="email" placeholder="jane@example.com" />
      </div>
      <div class="input-group">
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
      </div>
      <div class="auth-options">
        <label class="checkbox-label">
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>
      <button class="submit-btn primary full">Sign In</button>
    </form>
    
    <p class="auth-footer">Don't have an account? <a>Sign up</a></p>
  </div>
</template>`;

const contactCode = `<template>
  <div class="contact-split">
    <!-- Left: Info -->
    <div class="contact-info">
      <h3>Get in touch</h3>
      <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
      
      <div class="info-items">
        <div class="info-item">
          <div class="icon-box"><!-- Icon --></div>
          <div>
            <strong>Chat to sales</strong>
            <span>sales@nexus.com</span>
          </div>
        </div>
        <!-- More info items... -->
      </div>
    </div>
    
    <!-- Right: Form -->
    <div class="contact-form">
      <form @submit.prevent>
        <div class="form-row">
          <div class="input-group">
            <label>First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div class="input-group">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div class="input-group">
          <label>Email</label>
          <input type="email" placeholder="you@company.com" />
        </div>
        <div class="input-group">
          <label>Message</label>
          <textarea rows="4" placeholder="How can we help?"></textarea>
        </div>
        <button class="submit-btn primary full">Send message</button>
      </form>
    </div>
  </div>
</template>`;

const profileCode = `<template>
  <form class="profile-form" @submit.prevent>
    <div class="form-section">
      <div class="section-title">
        <h4>Personal Info</h4>
        <p>Update your photo and personal details here.</p>
      </div>
      
      <div class="section-content">
        <!-- Avatar Upload -->
        <div class="avatar-upload">
          <img src="..." class="avatar" />
          <div class="upload-actions">
            <button class="btn-outline sm">Upload new</button>
            <button class="btn-ghost sm">Remove</button>
          </div>
        </div>
        <!-- Fields -->
        <div class="input-group">
          <label>Username</label>
          <div class="input-prefix">
            <span class="prefix">nexus.io/</span>
            <input type="text" value="janedoe" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="form-actions right">
      <button class="btn-outline">Cancel</button>
      <button class="btn-primary">Save changes</button>
    </div>
  </form>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Forms & Inputs</h1>
    <p class="page-description">Premium form layouts for authentication, contact pages, and user settings.</p>
  </div>

  <!-- Variant 1: Auth Login Form -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Authentication (Login)</SubTitle>
      <button @click="toggle('auth')" class="btn-toggle-code">{{ show['auth'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area auth-bg">
      <div class="auth-card">
        <div class="auth-header">
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        
        <div class="auth-social">
          <button class="social-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
            Google
          </button>
          <button class="social-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </button>
        </div>

        <div class="divider"><span>or continue with email</span></div>

        <form class="auth-form" @submit.prevent>
          <div class="fm-group">
            <label>Email address</label>
            <input type="email" placeholder="jane@example.com" class="fm-input" />
          </div>
          <div class="fm-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" class="fm-input" />
          </div>
          <div class="auth-options">
            <label class="cb-label">
              <input type="checkbox" /> 
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>
          <button class="fm-btn primary full">Sign In</button>
        </form>
        
        <p class="auth-footer">Don't have an account? <a>Sign up</a></p>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['auth']" :code="loginCode" language="html" /></transition>
  </section>

  <!-- Variant 2: Split Contact Form -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>2-Column Contact Form</SubTitle>
      <button @click="toggle('contact')" class="btn-toggle-code">{{ show['contact'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area split-bg">
      <div class="contact-split">
        <!-- Left Banner -->
        <div class="contact-left">
          <h3>Get in touch</h3>
          <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
          
          <div class="contact-items">
            <div class="contact-item">
              <div class="ci-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div class="ci-text">
                <strong>Chat to sales</strong>
                <span>Speak to our friendly team.</span>
                <a href="#">sales@nexus.com</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="ci-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="ci-text">
                <strong>Call us</strong>
                <span>Mon-Fri from 8am to 5pm.</span>
                <a href="#">+1 (555) 000-0000</a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Form -->
        <div class="contact-right">
          <form @submit.prevent class="contact-form">
            <div class="fm-row">
              <div class="fm-group">
                <label>First name</label>
                <input type="text" placeholder="First name" class="fm-input" />
              </div>
              <div class="fm-group">
                <label>Last name</label>
                <input type="text" placeholder="Last name" class="fm-input" />
              </div>
            </div>
            <div class="fm-group">
              <label>Email</label>
              <input type="email" placeholder="you@company.com" class="fm-input" />
            </div>
            <div class="fm-group">
              <label>Phone number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" class="fm-input" />
            </div>
            <div class="fm-group">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help?" class="fm-area"></textarea>
            </div>
            <button class="fm-btn primary full mt-2">Send message</button>
          </form>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['contact']" :code="contactCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Profile/Settings Form -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Settings / Profile Form</SubTitle>
      <button @click="toggle('profile')" class="btn-toggle-code">{{ show['profile'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="settings-card">
        <form @submit.prevent class="settings-form">
          <!-- Section 1 -->
          <div class="st-section">
            <div class="st-info">
              <h4>Profile Picture</h4>
              <p>Update your photo and personal details.</p>
            </div>
            <div class="st-fields">
              <div class="avatar-upload">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Avatar" class="avatar-img" />
                <div class="avatar-actions">
                  <button class="fm-btn outline sm">Upload new</button>
                  <button class="fm-btn plain sm">Remove</button>
                </div>
              </div>
            </div>
          </div>

          <hr class="st-divider" />

          <!-- Section 2 -->
          <div class="st-section">
            <div class="st-info">
              <h4>Personal Info</h4>
              <p>This information will be displayed publicly so be careful what you share.</p>
            </div>
            <div class="st-fields">
              <div class="fm-row">
                <div class="fm-group">
                  <label>First name</label>
                  <input type="text" value="Jane" class="fm-input" />
                </div>
                <div class="fm-group">
                  <label>Last name</label>
                  <input type="text" value="Doe" class="fm-input" />
                </div>
              </div>
              <div class="fm-group">
                <label>Email address</label>
                <div class="fm-icon-input">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="input-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <input type="email" value="jane@nexus.com" class="fm-input with-icon" />
                </div>
              </div>
              <div class="fm-group">
                <label>Username</label>
                <div class="fm-prefix-box">
                  <span class="fm-prefix">nexus.io/</span>
                  <input type="text" value="janedoe" class="fm-input prefixed" />
                </div>
              </div>
              <div class="fm-group">
                <label>Bio</label>
                <textarea rows="3" class="fm-area">Product Designer based in New York. I love building interfaces that feel good to use.</textarea>
                <span class="fm-hint">Brief description for your profile. URLs are hyperlinked.</span>
              </div>
            </div>
          </div>

          <div class="st-footer">
            <button class="fm-btn outline">Cancel</button>
            <button class="fm-btn primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['profile']" :code="profileCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; display: flex; justify-content: center; }
.preview-area.auth-bg { background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); }
.preview-area.split-bg { background: white; padding: 0; overflow: hidden; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* Global Form Elements */
.fm-group { display: flex; flex-direction: column; gap: 0.45rem; width: 100%; margin-bottom: 1rem; }
.fm-row { display: flex; gap: 1rem; width: 100%; }
.fm-group label { font-size: 0.875rem; font-weight: 600; color: #334155; }
.fm-input, .fm-area { padding: 0.75rem 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; color: #0f172a; outline: none; transition: border 0.2s; font-family: inherit; width: 100%; background: white; }
.fm-input::placeholder, .fm-area::placeholder { color: #94a3b8; }
.fm-input:focus, .fm-area:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
.fm-area { resize: vertical; }

.fm-btn { border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; }
.fm-btn.primary { background: #4f46e5; color: white; }
.fm-btn.primary:hover { background: #4338ca; box-shadow: 0 4px 12px rgba(79,70,229,0.25); }
.fm-btn.outline { background: white; border: 1px solid #cbd5e1; color: #475569; }
.fm-btn.outline:hover { background: #f8fafc; border-color: #94a3b8; color: #0f172a; }
.fm-btn.plain { background: transparent; color: #64748b; }
.fm-btn.plain:hover { color: #ef4444; background: #fee2e2; }
.fm-btn.full { width: 100%; display: block; }
.fm-btn.sm { padding: 0.5rem 1rem; font-size: 0.875rem; }
.mt-2 { margin-top: 1rem; }

/* 1. Auth Card */
.auth-card { background: white; border-radius: 16px; padding: 2.5rem; width: 100%; max-width: 440px; box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.8); }
.auth-header { text-align: center; margin-bottom: 2rem; }
.auth-header h2 { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 0.4rem; }
.auth-header p { font-size: 0.95rem; color: #64748b; }
.auth-social { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; }
.social-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.65rem; font-weight: 600; font-size: 0.9rem; color: #334155; cursor: pointer; transition: all 0.2s; }
.social-btn:hover { background: #f8fafc; border-color: #94a3b8; }
.divider { display: flex; align-items: center; text-align: center; margin: 1.5rem 0; color: #94a3b8; font-size: 0.85rem; }
.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid #e2e8f0; }
.divider span { padding: 0 10px; }
.auth-options { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.cb-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #475569; cursor: pointer; }
.cb-label input { accent-color: #4f46e5; width: 16px; height: 16px; cursor: pointer; }
.forgot-link { font-size: 0.875rem; font-weight: 600; color: #4f46e5; text-decoration: none; }
.forgot-link:hover { text-decoration: underline; }
.auth-footer { text-align: center; margin-top: 2rem; font-size: 0.9rem; color: #64748b; }
.auth-footer a { font-weight: 600; color: #4f46e5; cursor: pointer; }
.auth-footer a:hover { text-decoration: underline; }

/* 2. Split Form */
.contact-split { display: flex; width: 100%; min-height: 500px; background: white; }
.contact-left { flex: 1; background: #0f172a; padding: 4rem 3rem; color: white; display: flex; flex-direction: column; }
.contact-left h3 { font-size: 2rem; font-weight: 800; margin-bottom: 0.75rem; }
.contact-left p { font-size: 1.05rem; color: #cbd5e1; margin-bottom: 4rem; max-width: 90%; line-height: 1.6; }
.contact-items { display: flex; flex-direction: column; gap: 2.5rem; }
.contact-item { display: flex; gap: 1.25rem; }
.ci-icon { width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #818cf8; flex-shrink: 0; }
.ci-text { display: flex; flex-direction: column; gap: 0.25rem; }
.ci-text strong { font-size: 1.1rem; font-weight: 700; color: white; }
.ci-text span { font-size: 0.95rem; color: #94a3b8; }
.ci-text a { font-size: 0.95rem; font-weight: 600; color: #818cf8; margin-top: 0.25rem; }
.contact-right { flex: 1.2; padding: 4rem 3rem; background: white; }

@media (max-width: 900px) {
  .contact-split { flex-direction: column; }
  .contact-left, .contact-right { padding: 2.5rem 1.5rem; }
  .fm-row { flex-direction: column; gap: 0; }
}

/* 3. Profile / Settings */
.settings-card { background: white; border-radius: 16px; border: 1px solid #e2e8f0; width: 100%; max-width: 800px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.st-section { display: flex; gap: 2.5rem; padding: 2.5rem; }
.st-info { flex: 1; }
.st-info h4 { font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.4rem; }
.st-info p { font-size: 0.9rem; color: #64748b; line-height: 1.5; }
.st-fields { flex: 2; }
.st-divider { border: 0; border-top: 1px solid #e2e8f0; margin: 0; }
.st-footer { padding: 1.5rem 2.5rem; background: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 1rem; border-radius: 0 0 16px 16px; }

.avatar-upload { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1rem; }
.avatar-img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.avatar-actions { display: flex; gap: 0.75rem; }

.fm-icon-input { position: relative; display: flex; align-items: center; }
.input-icon { position: absolute; left: 1rem; color: #94a3b8; }
.fm-input.with-icon { padding-left: 2.75rem; }

.fm-prefix-box { display: flex; }
.fm-prefix { display: flex; align-items: center; padding: 0 1rem; background: #f8fafc; border: 1px solid #cbd5e1; border-right: none; border-radius: 8px 0 0 8px; color: #64748b; font-size: 0.95rem; }
.fm-input.prefixed { border-radius: 0 8px 8px 0; }
.fm-hint { font-size: 0.8rem; color: #64748b; margin-top: 0.25rem; }

@media (max-width: 600px) {
  .st-section { flex-direction: column; gap: 1.5rem; padding: 1.5rem; }
}

/* Slide Transition */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
