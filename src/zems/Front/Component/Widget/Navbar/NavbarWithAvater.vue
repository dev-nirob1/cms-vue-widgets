<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import ListItem from '@/components/Elements/ListItem.vue';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const handleHamburger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  const container = document.querySelector('.container');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      container.classList.add('scrolling')
    } else {
      container.classList.remove('scrolling')
    }
  })
})
</script>

<template>
  <header class="navbar relative">
    <div class="container">
      <nav class="flex justify-between align-center">
        <RouterLink to="/" class="logo">
          <BaseImage image="https://www.webpoka.com/front/images/logo.png" alt="logo" />
        </RouterLink>
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem class="mobile-logo">
            <RouterLink to="/" class="logo">
              <BaseImage image="/logo-header.png" alt="logo" />
            </RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/about">About</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/properties">Properties</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/contact">Contact</RouterLink>
          </ListItem>
        </ul>

        <div class="dropdown-menu relative">
          <BaseButton class="width-full height-full">
            <!-- <i class="fa-solid fa-user"></i> -->
            <BaseImage image="https://randomuser.me/api/portraits/men/32.jpg" alt="image" />
          </BaseButton>

          <ul class="dropdown">
            <ListItem>
              <a href="#">Profile</a>
            </ListItem>
            <ListItem>
              <a href="#">Dashboard</a>
            </ListItem>
            <ListItem>
              <BaseButton>Logout</BaseButton>
            </ListItem>
          </ul>
        </div>

        <div @click="handleHamburger" class="hamburger flex-center">
          <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
        </div>
      </nav>
    </div>
  </header>

</template>

<style scoped>
.navbar {
  padding: .75rem 0;
  background: var(--dark-color);
}
.navbar a {
  text-decoration: none;
}
.container {
  transition: all .5s ease-in-out;
}

.container.scrolling {
  background: var(--dark-color);
  border-radius: 1rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
  padding: 0.5rem 1rem;
}

.navbar .logo {
  width: auto;
  height: 60px;
}

.navbar .logo img {
  height: 100%;
}

.nav-links {
  color: var(--white-color);
  background: var(--dark-color);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -100%;
  top: 0;
  width: 0;
  height: 100vh;
  z-index: 1;
  transition: all .3s ease-in-out;
}

.nav-links.active {
  left: 0;
  width: 60vw;
}

.nav-links a {
  display: inline-block;
  padding: .5rem 1rem;
}

.hamburger {
  height: 2rem;
  width: 2rem;
  background: var(--primary-color);
}

.dropdown-menu {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}

.dropdown-menu .btn {
  padding: 0;
  margin: 0;
}

.dropdown-menu i {
  font-size: 1.5rem;
}

.dropdown-menu .btn img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dropdown-menu .btn {
  border-radius: 50%;
  border: 2px solid var(--primary-color);
}

.dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  opacity: 0;
  pointer-events: none;
  background: var(--white-color);
  z-index: 1000;
  width: 8rem;
  padding: 1rem .75rem;
  transition: all .3s ease-in-out;
  border-radius: .25rem;
}

.dropdown .btn {
  all: inherit;
  cursor: pointer;
}

.dropdown li,
.dropdown .btn {
  padding: .3rem 0;
}

.dropdown li:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}

.dropdown-menu:hover .dropdown {
  opacity: 1;
  pointer-events: visible;
}

@media (min-width: 768px) {

  .hamburger,
  .mobile-logo {
    display: none;
  }

  .nav-links {
    position: static;
    height: fit-content;
    width: fit-content;
    background: transparent;
    flex-direction: row;
  }

  li a.router-link-exact-active {
    color: var(--primary-color);
  }

}
</style>
