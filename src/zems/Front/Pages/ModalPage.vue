<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

// Specific Modal States
const modalBasic = ref(false);
const modalDanger = ref(false);
const modalDrawer = ref(false);
const modalMedia = ref(false);
const modalGallery = ref(false);

const galleryIndex = ref(0);
const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=870', caption: 'Modern Kitchen' },
  { src: 'https://images.unsplash.com/photo-1613891186868-eebda780cc8a?auto=format&fit=crop&q=80&w=870', caption: 'Rooftop View' },
  { src: 'https://images.unsplash.com/photo-1613685301586-4f2b15f0ccd4?auto=format&fit=crop&q=80&w=1032', caption: 'Minimalist Drawing Room' }
];

const nextSlide = () => { galleryIndex.value = (galleryIndex.value + 1) % galleryItems.length; };
const prevSlide = () => { galleryIndex.value = (galleryIndex.value - 1 + galleryItems.length) % galleryItems.length; };

const basicCode = `<template>
  <button @click="isOpen = true" class="btn">Open Modal</button>

  <div v-if="isOpen" class="modal-overlay" @click="isOpen = false">
    <div class="modal-box" @click.stop>
      <div class="modal-header">
        <h3>New Feature Available</h3>
        <button @click="isOpen = false" class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <p>We've just released a new set of tools to help you build faster. Check out the changelog for more details.</p>
      </div>
      <div class="modal-footer">
        <button @click="isOpen = false" class="btn-outline">Dismiss</button>
        <button class="btn-primary">View Changelog</button>
      </div>
    </div>
  </div>
</template>`;

const dangerCode = `<template>
  <div v-if="isOpen" class="modal-overlay" @click="isOpen = false">
    <div class="modal-box danger" @click.stop>
      <div class="icon-circle">
        <!-- warning icon -->
      </div>
      <div class="modal-body center">
        <h3>Delete Account?</h3>
        <p>This action cannot be undone. All your data will be permanently removed.</p>
      </div>
      <div class="modal-footer split">
        <button @click="isOpen = false" class="btn-outline">Cancel</button>
        <button class="btn-danger">Delete Completely</button>
      </div>
    </div>
  </div>
</template>`;

const drawerCode = `<template>
  <div v-if="isOpen" class="modal-overlay" @click="isOpen = false">
    <div class="drawer-box right" @click.stop>
      <div class="drawer-header">
        <h3>Edit Profile</h3>
        <button @click="isOpen = false" class="close-btn">×</button>
      </div>
      <div class="drawer-body">
        <!-- form fields -->
        <div class="input-group">
          <label>Name</label><input type="text" />
        </div>
      </div>
      <div class="drawer-footer">
        <button class="btn-primary full">Save Changes</button>
      </div>
    </div>
  </div>
</template>`;

const mediaCode = `<template>
  <div v-if="isOpen" class="modal-overlay dark" @click="isOpen = false">
    <div class="media-box" @click.stop>
      <button @click="isOpen = false" class="close-btn floating">×</button>
      <img src="..." alt="Preview" />
      <div class="media-caption">Architecture & Design</div>
    </div>
  </div>
</template>`;

const galleryCode = `<template>
  <div v-if="isOpen" class="modal-overlay dark">
    <button @click="isOpen = false" class="m-close floating">×</button>
    <button @click="prevSlide" class="nav-btn prev">‹</button>
    
    <div class="gallery-container">
      <img :src="images[currentIndex].src" class="gallery-img" />
      <div class="gallery-caption">{{ images[currentIndex].caption }}</div>
      <div class="gallery-counter">{{ currentIndex + 1 }} / {{ images.length }}</div>
    </div>
    
    <button @click="nextSlide" class="nav-btn next">›</button>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Modals & Dialogs</h1>
    <p class="page-description">Interruptive components used to capture attention, request information, or show media.</p>
  </div>

  <!-- Basic Centered Modal -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Basic Modal (Centered)</SubTitle>
      <button @click="toggle('basic')" class="btn-toggle-code">{{ show['basic'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="flex-center">
        <button @click="modalBasic = true" class="btn-trigger">Open Basic Modal</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['basic']" :code="basicCode" language="html" /></transition>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="modalBasic" class="m-overlay" @click="modalBasic = false">
          <div class="m-box" @click.stop>
            <div class="m-header">
              <h3>New Feature Available</h3>
              <button @click="modalBasic = false" class="m-close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div class="m-body">
              <p>We've just released a new set of tools to help you build faster. Check out the changelog to see what's new in this version and how to migrate your existing components.</p>
            </div>
            <div class="m-footer end">
              <button @click="modalBasic = false" class="m-btn outline">Dismiss</button>
              <button @click="modalBasic = false" class="m-btn primary">View Changelog</button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>

  <!-- Danger / Confirmation -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Danger / Confirmation Dialog</SubTitle>
      <button @click="toggle('danger')" class="btn-toggle-code">{{ show['danger'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="flex-center">
        <button @click="modalDanger = true" class="btn-trigger danger">Delete Account...</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['danger']" :code="dangerCode" language="html" /></transition>

    <Teleport to="body">
      <transition name="modal-bounce">
        <div v-if="modalDanger" class="m-overlay blur" @click="modalDanger = false">
          <div class="m-box centered sm" @click.stop>
            <div class="icon-circle danger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div class="m-body text-center mt-2">
              <h3 class="mb-1">Delete your account?</h3>
              <p>This action cannot be undone. All your projects, teams, and data will be permanently removed.</p>
            </div>
            <div class="m-footer split mt-3">
              <button @click="modalDanger = false" class="m-btn outline flex-1">Cancel</button>
              <button @click="modalDanger = false" class="m-btn red flex-1">Delete Completely</button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>

  <!-- Slide-over Drawer -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Slide-over (Drawer)</SubTitle>
      <button @click="toggle('drawer')" class="btn-toggle-code">{{ show['drawer'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="flex-center">
        <button @click="modalDrawer = true" class="btn-trigger">Open Drawer</button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['drawer']" :code="drawerCode" language="html" /></transition>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="modalDrawer" class="m-overlay blur" @click="modalDrawer = false"></div>
      </transition>
      <transition name="slide-right">
        <div v-if="modalDrawer" class="drawer-box right" @click.stop>
          <div class="drawer-header">
            <h3>Edit Profile</h3>
            <button @click="modalDrawer = false" class="m-close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div class="drawer-body">
            <div class="input-group">
              <label>Full Name</label>
              <input type="text" value="Jane Doe" class="m-input" />
            </div>
            <div class="input-group">
              <label>Email Address</label>
              <input type="email" value="jane@example.com" class="m-input" />
            </div>
            <div class="input-group">
              <label>Bio</label>
              <textarea class="m-textarea" rows="4">Product designer based in NY.</textarea>
            </div>
          </div>
          <div class="drawer-footer">
            <button @click="modalDrawer = false" class="m-btn primary full">Save Changes</button>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>

  <!-- Media / Image Viewer -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Image / Media Viewer</SubTitle>
      <button @click="toggle('media')" class="btn-toggle-code">{{ show['media'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="flex-center">
        <!-- Thumbnail triggering the modal -->
        <div class="media-thumb" @click="modalMedia = true">
          <img src="https://images.unsplash.com/photo-1613891186868-eebda780cc8a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=400" alt="Thumb" />
          <div class="play-icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['media']" :code="mediaCode" language="html" /></transition>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="modalMedia" class="m-overlay dark" @click="modalMedia = false">
          <div class="media-container" @click.stop>
            <button @click="modalMedia = false" class="m-close floating">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img src="https://images.unsplash.com/photo-1613891186868-eebda780cc8a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200" alt="Full Image" class="media-full" />
            <div class="media-caption">Luxurious Rooftop View - Unsplash</div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>

  <!-- Gallery Lightbox (Next/Prev) -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Gallery Lightbox (Next / Prev)</SubTitle>
      <button @click="toggle('gallery')" class="btn-toggle-code">{{ show['gallery'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area">
      <div class="flex-center">
        <!-- Gallery Trigger -->
        <button class="btn-trigger" @click="modalGallery = true; galleryIndex = 0">
          Open Gallery (3 Photos)
        </button>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['gallery']" :code="galleryCode" language="html" /></transition>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="modalGallery" class="m-overlay dark" @click="modalGallery = false">
          
          <button @click="modalGallery = false" class="m-close floating-tr">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <button @click.stop="prevSlide" class="gallery-nav prev">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div class="gallery-box" @click.stop>
            <transition name="fade" mode="out-in">
              <img :key="galleryIndex" :src="galleryItems[galleryIndex].src" class="gallery-full" />
            </transition>
            <div class="gallery-meta">
              <div class="gallery-caption">{{ galleryItems[galleryIndex].caption }}</div>
              <div class="gallery-counter">{{ galleryIndex + 1 }} / {{ galleryItems.length }}</div>
            </div>
          </div>

          <button @click.stop="nextSlide" class="gallery-nav next">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.flex-center { display: flex; justify-content: center; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

/* Triggers */
.btn-trigger { background: var(--primary-color); color: white; border: none; border-radius: 10px; padding: 0.75rem 1.5rem; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; }
.btn-trigger:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(79,70,229,0.3); }
.btn-trigger.danger { background: white; border: 2px solid #ef4444; color: #ef4444; }
.btn-trigger.danger:hover { background: #ef4444; color: white; box-shadow: 0 4px 12px rgba(239,68,68,0.3); }

/* Globals for Modals via Teleport */
:global(.m-overlay) {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(15,23,42,0.4);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  padding: 1rem;
}
:global(.m-overlay.blur) { backdrop-filter: blur(4px); }
:global(.m-overlay.dark) { background: rgba(0,0,0,0.9); }

:global(.m-box) {
  background: white;
  border-radius: 20px;
  width: 100%; max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  overflow: hidden;
}
:global(.m-box.sm) { max-width: 400px; }
:global(.m-box.centered) { padding: 2rem; display: flex; flex-direction: column; align-items: center; }

:global(.m-header) {
  padding: 1.5rem; border-bottom: 1px solid #f1f5f9;
  display: flex; align-items: center; justify-content: space-between;
}
:global(.m-header h3) { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 0; }

:global(.m-close) {
  background: transparent; border: none; color: #94a3b8;
  cursor: pointer; padding: 0.25rem; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
:global(.m-close:hover) { background: #f1f5f9; color: #0f172a; }

:global(.m-body) { padding: 1.5rem; color: #475569; font-size: 0.95rem; line-height: 1.6; }
:global(.text-center) { text-align: center; }
:global(.mb-1) { margin-bottom: 0.5rem; color: #0f172a; font-size: 1.25rem; font-weight: 700;}
:global(.mt-2) { margin-top: 1rem; }
:global(.mt-3) { margin-top: 1.5rem; }

:global(.m-footer) {
  padding: 1.5rem; border-top: 1px solid #f1f5f9; background: #f8fafc;
  display: flex; gap: 0.75rem;
}
:global(.m-footer.end) { justify-content: flex-end; }
:global(.m-footer.split) { padding: 0; border: none; background: white; width: 100%; }

:global(.flex-1) { flex: 1; }

:global(.m-btn) {
  border: none; border-radius: 10px; padding: 0.6rem 1.2rem;
  font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;
}
:global(.m-btn.full) { width: 100%; padding: 0.8rem; }
:global(.m-btn.primary) { background: #4f46e5; color: white; }
:global(.m-btn.primary:hover) { background: #4338ca; }
:global(.m-btn.outline) { background: white; border: 1px solid #cbd5e1; color: #475569; }
:global(.m-btn.outline:hover) { background: #f1f5f9; color: #0f172a; }
:global(.m-btn.red) { background: #ef4444; color: white; }
:global(.m-btn.red:hover) { background: #dc2626; }

:global(.icon-circle.danger) {
  width: 56px; height: 56px; border-radius: 50%;
  background: #fee2e2; color: #ef4444; display: flex; align-items: center; justify-content: center;
}

/* Drawer / Slide-over */
:global(.drawer-box) {
  position: fixed; top: 0; height: 100vh; width: 100%; max-width: 400px;
  background: white; box-shadow: -10px 0 30px rgba(0,0,0,0.1);
  display: flex; flex-direction: column; z-index: 10000;
}
:global(.drawer-box.right) { right: 0; }

:global(.drawer-header) {
  padding: 1.5rem; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between;
}
:global(.drawer-header h3) { font-size: 1.25rem; font-weight: 700; margin: 0; }
:global(.drawer-body) { padding: 1.5rem; flex: 1; overflow-y: auto; }
:global(.drawer-footer) { padding: 1.5rem; border-top: 1px solid #e2e8f0; }

:global(.input-group) { margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; }
:global(.input-group label) { font-size: 0.85rem; font-weight: 600; color: #475569; }
:global(.m-input), :global(.m-textarea) {
  padding: 0.75rem 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; color: #0f172a;
  outline: none; transition: border 0.2s; font-family: inherit;
}
:global(.m-input:focus), :global(.m-textarea:focus) { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }

/* Media / Image modal */
.media-thumb { width: 200px; height: 140px; border-radius: 12px; overflow: hidden; position: relative; cursor: pointer; border: 2px solid white; box-shadow: var(--shadow-md); transition: transform 0.2s; }
.media-thumb:hover { transform: scale(1.05); }
.media-thumb img { width: 100%; height: 100%; object-fit: cover; }
.play-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 48px; height: 48px; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }

:global(.media-container) { position: relative; max-width: 90vw; max-height: 90vh; display: flex; flex-direction: column; align-items: center; }
:global(.media-full) { max-width: 100%; max-height: 85vh; object-fit: contain; border-radius: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
:global(.media-caption) { margin-top: 1rem; color: rgba(255,255,255,0.7); font-size: 0.95rem; font-weight: 500; }
:global(.m-close.floating) { position: absolute; top: -40px; right: -40px; background: rgba(255,255,255,0.1); color: white; border-radius: 50%; width: 40px; height: 40px; }
:global(.m-close.floating:hover) { background: rgba(255,255,255,0.25); transform: scale(1.1); }

/* Gallery Lightbox */
:global(.m-close.floating-tr) { position: absolute; top: 1.5rem; right: 1.5rem; background: rgba(255,255,255,0.1); color: white; border-radius: 50%; width: 48px; height: 48px; z-index: 10001; }
:global(.m-close.floating-tr:hover) { background: rgba(255,255,255,0.25); transform: scale(1.1); }

:global(.gallery-box) { position: relative; max-width: 80vw; max-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
:global(.gallery-full) { max-width: 100%; max-height: 75vh; object-fit: contain; border-radius: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
:global(.gallery-meta) { width: 100%; display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; color: rgba(255,255,255,0.8); font-size: 0.95rem; font-weight: 500; }
:global(.gallery-counter) { background: rgba(255,255,255,0.1); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; letter-spacing: 1px; }
:global(.gallery-nav) {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: white; border-radius: 50%; width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.2s; backdrop-filter: blur(4px);
  z-index: 10000;
}
:global(.gallery-nav:hover) { background: rgba(255,255,255,0.2); transform: translateY(-50%) scale(1.05); }
:global(.gallery-nav.prev) { left: 2rem; }
:global(.gallery-nav.next) { right: 2rem; }
@media (max-width: 768px) {
  :global(.gallery-nav.prev) { left: 0.5rem; }
  :global(.gallery-nav.next) { right: 0.5rem; }
  :global(.gallery-box) { max-width: 95vw; }
}

/* Transitions */
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 600px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }

/* Modal Transitions (Teleported) */
:global(.fade-enter-active), :global(.fade-leave-active) { transition: opacity 0.3s ease; }
:global(.fade-enter-from), :global(.fade-leave-to) { opacity: 0; }

:global(.modal-bounce-enter-active) { animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
:global(.modal-bounce-leave-active) { animation: bounce-in 0.3s reverse; }
@keyframes bounce-in {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

:global(.slide-right-enter-active), :global(.slide-right-leave-active) { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
:global(.slide-right-enter-from), :global(.slide-right-leave-to) { transform: translateX(100%); }
</style>
