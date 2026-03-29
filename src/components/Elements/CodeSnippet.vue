<script setup>
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css' // Premium dark theme
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

const props = defineProps({
  // Legacy support for unmigrated components
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'html'
  },
  // New Multi-Tab Support: Array of objects { name: 'Vue', language: 'html', code: '...' }
  blocks: {
    type: Array,
    default: () => []
  }
})

// Unified list of blocks to render
const resolvedBlocks = computed(() => {
  if (props.blocks && props.blocks.length > 0) {
    return props.blocks;
  }
  if (props.code) {
    return [{ name: props.language.toUpperCase(), language: props.language, code: props.code }];
  }
  return [];
});

const activeTab = ref(0)
const copied = ref(false)

const currentCode = computed(() => {
  if (resolvedBlocks.value.length === 0) return '';
  return resolvedBlocks.value[activeTab.value].code;
});

const currentLang = computed(() => {
  if (resolvedBlocks.value.length === 0) return 'markup';
  return resolvedBlocks.value[activeTab.value].language;
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(currentCode.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

const highlightCode = () => {
  if (typeof window !== 'undefined') {
    Prism.highlightAll()
  }
}

onMounted(() => {
  highlightCode()
})

watch(() => props.code, () => {
  setTimeout(highlightCode, 0)
})

watch(activeTab, async () => {
  await nextTick()
  highlightCode()
})
</script>

<template>
  <div class="code-snippet-container">
    <div class="code-header">
      
      <!-- Multi-Tab Menu -->
      <div v-if="resolvedBlocks.length > 1" class="tab-list">
        <button 
          v-for="(block, index) in resolvedBlocks" 
          :key="index"
          @click="activeTab = index"
          :class="['tab-btn', { active: activeTab === index }]"
        >
          {{ block.name }}
        </button>
      </div>

      <!-- Single Legacy Badge -->
      <div v-else class="language-badge">
        {{ currentLang === 'html' ? 'VUE' : currentLang.toUpperCase() }}
      </div>

      <button @click="copyToClipboard" class="copy-button" :class="{ copied }">
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="copy-text">{{ copied ? 'Copied' : 'Copy' }}</span>
      </button>
      
    </div>
    
    <div class="code-content">
      <pre :class="`language-${currentLang}`"><code>{{ currentCode }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.code-snippet-container {
  background: #1e293b; /* Tailwind slate-800 */
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
  background: rgba(15, 23, 42, 0.4); /* Tailwind slate-900 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.language-badge {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #94a3b8; /* Tailwind slate-400 */
}

/* Tab Layout Styling */
.tab-list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tab-btn {
  background: transparent;
  border: none;
  color: #64748b; /* Tailwind slate-500 */
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.02em;
}

.tab-btn:hover {
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.05);
}

.tab-btn.active {
  color: #38bdf8; /* Tailwind sky-400 */
  background: rgba(56, 189, 248, 0.1);
}

/* Copy Button */
.copy-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid transparent;
  color: #94a3b8;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s;
}

.copy-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.copy-button.copied {
  color: #34d399; /* emerald-400 */
}

.check-icon {
  color: #34d399;
}

/* Pre / Code Scroll Area */
.code-content {
  max-height: 400px;
  overflow-y: auto;
}

pre {
  margin: 0 !important;
  padding: 1.5rem !important;
  font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace !important;
  font-size: 0.875rem !important;
  line-height: 1.6 !important;
  background: transparent !important;
}

code {
  text-shadow: none !important; /* Removes ugly prism text glow */
}

/* Custom Webkit Scrollbar */
.code-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.code-content::-webkit-scrollbar-track {
  background: transparent;
}
.code-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
.code-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
