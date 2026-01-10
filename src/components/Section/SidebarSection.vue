<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <ul class="sidebar">
    <li>
      <RouterLink to="/cards">Navbar</RouterLink>
    </li>
    <li>
      <RouterLink to="/cards">Cards</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    max-width: 300px;
    width: 100%;
    border-right: 1px solid var(--light-color);
    height: 100vh;
    padding: 0 1rem;
  }
  .sidebar li a {
    display: block;
    padding: .5rem;
    text-decoration: none;
    background-color: var(--light-color);
  }
  .sidebar li a:hover {
    text-decoration: underline;
  }

</style>
