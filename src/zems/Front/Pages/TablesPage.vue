<script setup>
import { ref } from 'vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
import CodeSnippet from '@/components/Elements/CodeSnippet.vue';

const show = ref({});
const toggle = (id) => { show.value[id] = !show.value[id]; };

// Mock Data
const users = [
  { id: 1, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', department: 'Optimization', role: 'Member', status: 'Active', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: 2, name: 'Courtney Henry', email: 'courtney.henry@example.com', title: 'Designer', department: 'Product', role: 'Admin', status: 'Active', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: 3, name: 'Tom Cook', email: 'tom.cook@example.com', title: 'Director of Product', department: 'Product', role: 'Member', status: 'Offline', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  { id: 4, name: 'Whitney Francis', email: 'whitney.francis@example.com', title: 'Copywriter', department: 'Marketing', role: 'Admin', status: 'Active', img: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
];

const invoices = [
  { id: 'INV-1021', date: 'Oct 24, 2026', customer: 'Acme Corp', amount: '$4,200.00', status: 'Paid' },
  { id: 'INV-1022', date: 'Oct 28, 2026', customer: 'Globex Inc', amount: '$1,850.00', status: 'Pending' },
  { id: 'INV-1023', date: 'Nov 02, 2026', customer: 'Soylent Ltd', amount: '$6,450.00', status: 'Overdue' }
];

const simpleCode = `<template>
  <div class="table-card">
    <table class="simple-table">
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Status</th>
          <th class="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="inv in invoices" :key="inv.id">
          <td class="font-medium text-dark">{{ inv.id }}</td>
          <td class="text-muted">{{ inv.date }}</td>
          <td>{{ inv.customer }}</td>
          <td><span :class="'status-text ' + inv.status.toLowerCase()">{{ inv.status }}</span></td>
          <td class="text-right font-medium">{{ inv.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>`;

const saasCode = `<template>
  <div class="table-card overflow-x">
    <table class="saas-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Status</th>
          <th>Role</th>
          <th class="sr-only">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <div class="user-cell">
              <img :src="user.img" class="avatar" alt="" />
              <div>
                <div class="font-medium text-dark">{{ user.name }}</div>
                <div class="text-muted text-sm">{{ user.email }}</div>
              </div>
            </div>
          </td>
          <td>
            <div class="text-dark">{{ user.title }}</div>
            <div class="text-muted text-sm">{{ user.department }}</div>
          </td>
          <td>
            <span :class="['badge', user.status === 'Active' ? 'badge-success' : 'badge-gray']">
              {{ user.status }}
            </span>
          </td>
          <td class="text-muted">{{ user.role }}</td>
          <td class="text-right text-sm font-medium">
            <a href="#" class="edit-link">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>`;

const paginationCode = `<template>
  <div class="table-card">
    <table class="simple-table mb-0">
      <!-- Table content omitted for brevity -->
    </table>
    
    <!-- Pagination Footer -->
    <div class="pagination-footer">
      <p class="results-text">
        Showing <strong>1</strong> to <strong>10</strong> of <strong>97</strong> results
      </p>
      
      <nav class="pagination-nav" aria-label="Pagination">
        <a href="#" class="page-btn prev-next">Previous</a>
        <a href="#" class="page-btn active">1</a>
        <a href="#" class="page-btn">2</a>
        <a href="#" class="page-btn">3</a>
        <span class="page-dots">...</span>
        <a href="#" class="page-btn">10</a>
        <a href="#" class="page-btn prev-next">Next</a>
      </nav>
    </div>
  </div>
</template>`;
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Data Tables</h1>
    <p class="page-description">Versatile responsive grid layouts for displaying structured data, complete with statuses, avatars, and pagination.</p>
  </div>

  <!-- Variant 1: Basic Simple Table -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Simple Financial Table</SubTitle>
      <button @click="toggle('simple')" class="btn-toggle-code">{{ show['simple'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <div class="table-card m-4">
        <table class="simple-table">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Status</th>
              <th class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="inv in invoices" :key="inv.id">
              <td class="font-medium text-dark">{{ inv.id }}</td>
              <td class="text-muted">{{ inv.date }}</td>
              <td>{{ inv.customer }}</td>
              <td>
                <span :class="['status-text', inv.status.toLowerCase()]">
                  {{ inv.status }}
                </span>
              </td>
              <td class="text-right font-medium text-dark">{{ inv.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['simple']" :code="simpleCode" language="html" /></transition>
  </section>

  <!-- Variant 2: SaaS Avatar Grid -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>SaaS User Directory (Avatars & Badges)</SubTitle>
      <button @click="toggle('saas')" class="btn-toggle-code">{{ show['saas'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <div class="table-card m-4 overflow-x">
        <table class="saas-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Status</th>
              <th>Role</th>
              <th class="sr-only">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                <div class="user-cell">
                  <img :src="user.img" class="avatar" alt="" />
                  <div>
                    <div class="font-medium text-dark">{{ user.name }}</div>
                    <div class="text-muted text-sm">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-dark">{{ user.title }}</div>
                <div class="text-muted text-sm">{{ user.department }}</div>
              </td>
              <td>
                <span :class="['badge', user.status === 'Active' ? 'badge-success' : 'badge-gray']">
                  {{ user.status }}
                </span>
              </td>
              <td class="text-muted">{{ user.role }}</td>
              <td class="text-right">
                <a href="#" class="edit-link">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['saas']" :code="saasCode" language="html" /></transition>
  </section>

  <!-- Variant 3: Paginated Table -->
  <section class="component-section">
    <div class="section-header">
      <SubTitle>Paginated Results</SubTitle>
      <button @click="toggle('pagination')" class="btn-toggle-code">{{ show['pagination'] ? 'Hide Code' : 'Show Code' }}</button>
    </div>
    <div class="preview-area no-pad">
      <div class="table-card m-4">
        <table class="simple-table mb-0">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Timestamp</th>
              <th class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-medium text-dark">TRX-7829-AB</td>
              <td class="text-muted">Today at 1:45 PM</td>
              <td class="text-right font-medium text-dark">$85.00</td>
            </tr>
            <tr>
              <td class="font-medium text-dark">TRX-7830-YZ</td>
              <td class="text-muted">Yesterday at 9:12 AM</td>
              <td class="text-right font-medium text-dark">$142.50</td>
            </tr>
            <tr>
              <td class="font-medium text-dark">TRX-7831-LM</td>
              <td class="text-muted">Oct 24, 2026</td>
              <td class="text-right font-medium text-dark">$9.99</td>
            </tr>
          </tbody>
        </table>
        
        <!-- Pagination Footer -->
        <div class="pagination-footer">
          <p class="results-text">
            Showing <strong>1</strong> to <strong>10</strong> of <strong>97</strong> results
          </p>
          
          <nav class="pagination-nav" aria-label="Pagination">
            <a href="#" class="page-btn prev-next">
              <span class="sr-only">Previous</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            </a>
            <a href="#" class="page-btn active">1</a>
            <a href="#" class="page-btn">2</a>
            <a href="#" class="page-btn">3</a>
            <span class="page-dots">...</span>
            <a href="#" class="page-btn">10</a>
            <a href="#" class="page-btn prev-next">
              <span class="sr-only">Next</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <transition name="slide"><CodeSnippet v-if="show['pagination']" :code="paginationCode" language="html" /></transition>
  </section>
</template>

<style scoped>
.page-header { margin-bottom: 3rem; }
.page-title { font-size: 2.5rem; font-weight: 800; color: var(--dark-color); margin-bottom: 0.5rem; }
.page-description { font-size: 1.125rem; color: var(--text-muted); max-width: 600px; }

.component-section { background: white; border-radius: 16px; padding: 2rem; margin-bottom: 3rem; border: 1px solid var(--light-color); box-shadow: var(--shadow-sm); }
.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.preview-area { padding: 3rem; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; }
.preview-area.no-pad { padding: 0; background: #f8fafc; border: 1px dashed #cbd5e1; overflow: hidden; }

.btn-toggle-code { background: transparent; border: 1px solid var(--primary-color); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
.btn-toggle-code:hover { background: var(--primary-color); color: white; }

.m-4 { margin: 2rem; }
.text-right { text-align: right; }
.font-medium { font-weight: 500; }
.text-dark { color: #0f172a; }
.text-muted { color: #64748b; }
.text-sm { font-size: 0.875rem; }
.sr-only { display: none; }
.mb-0 { margin-bottom: 0 !important; }

/* Table Card Wrapper */
.table-card { background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
.overflow-x { overflow-x: auto; }

/* 1. Simple Table */
.simple-table { width: 100%; border-collapse: collapse; text-align: left; }
.simple-table th { border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem; font-size: 0.875rem; font-weight: 600; color: #475569; background: #f8fafc; text-transform: uppercase; letter-spacing: 0.05em; }
.simple-table td { padding: 1.25rem 1.5rem; border-bottom: 1px solid #e2e8f0; font-size: 0.95rem; color: #334155; }
.simple-table tbody tr:last-child td { border-bottom: none; }
.simple-table tbody tr:hover { background: #f8fafc; }

.status-text { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; font-weight: 500; }
.status-text::before { content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; }
.status-text.paid::before { background: #22c55e; }
.status-text.pending::before { background: #eab308; }
.status-text.overdue::before { background: #ef4444; }


/* 2. SaaS Table */
.saas-table { width: 100%; border-collapse: collapse; text-align: left; white-space: nowrap; }
.saas-table th { padding: 1rem 1.5rem; font-size: 0.875rem; font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0; }
.saas-table td { padding: 1.25rem 1.5rem; border-bottom: 1px solid #e2e8f0; font-size: 0.95rem; }
.saas-table tbody tr:last-child td { border-bottom: none; }
.saas-table tbody tr:hover { background: #f8fafc; }

.user-cell { display: flex; align-items: center; gap: 1rem; }
.avatar { height: 40px; width: 40px; border-radius: 50%; object-fit: cover; background: #f1f5f9; flex-shrink: 0; }

.badge { display: inline-flex; padding: 0.25rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; line-height: 1; }
.badge-success { background: #dcfce7; color: #166534; }
.badge-gray { background: #f1f5f9; color: #475569; }

.edit-link { color: #4f46e5; text-decoration: none; font-weight: 600; transition: color 0.15s; }
.edit-link:hover { color: #3730a3; text-decoration: underline; }


/* 3. Pagination Footer */
.pagination-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem; background: white; border-top: 1px solid #e2e8f0;
  border-radius: 0 0 12px 12px;
}
.results-text { margin: 0; font-size: 0.875rem; color: #64748b; }
.results-text strong { font-weight: 600; color: #0f172a; }

.pagination-nav { display: inline-flex; align-items: stretch; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.page-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.5rem 0.8rem; font-size: 0.875rem; font-weight: 500; color: #475569;
  background: white; border-right: 1px solid #cbd5e1; text-decoration: none; transition: background 0.15s;
}
.page-btn:last-child { border-right: none; }
.page-btn:hover:not(.active) { background: #f8fafc; }
.page-btn.active { background: #4f46e5; color: white; border-color: #4f46e5; position: relative; z-index: 10; float: left; margin-right: -1px; border-right: 1px solid #4f46e5; }
.page-dots { display: inline-flex; align-items: center; padding: 0.5rem 0.8rem; font-size: 0.875rem; color: #64748b; border-right: 1px solid #cbd5e1; background: white; }

@media (max-width: 640px) {
  .pagination-footer { flex-direction: column; gap: 1rem; }
}

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 800px; opacity: 1; }
.slide-enter-from, .slide-leave-to { max-height: 0; opacity: 0; margin: 0; overflow: hidden; }
</style>
