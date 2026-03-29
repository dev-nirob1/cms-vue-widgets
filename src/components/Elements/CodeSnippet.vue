<script setup>
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css' // Premium dark theme
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'html'
  }
})

const copied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
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
</script>

<template>
  <div class="code-snippet-container">
    <div class="code-header">
      <span class="language-badge">{{ language }}</span>
      <button @click="copyToClipboard" class="copy-button" :class="{ copied }">
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span class="copy-text">{{ copied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>
    <div class="code-content">
      <pre :class="`language-${language}`"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.code-snippet-container {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.language-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #818cf8;
  letter-spacing: 0.05em;
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #d1d5db;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.copy-button:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transform: translateY(-1px);
}

.copy-button.copied {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

.code-content {
  max-height: 400px;
  overflow-y: auto;
}

pre {
  margin: 0 !important;
  padding: 1.25rem !important;
  font-family: 'Fira Code', 'Roboto Mono', monospace !important;
  font-size: 0.9rem !important;
  line-height: 1.5 !important;
  background: transparent !important;
}

/* Custom Scrollbar for Code Content */
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

.check-icon {
  color: white;
}
</style>
