<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import ListItem from '@/components/Elements/ListItem.vue';
import { onMounted, ref } from 'vue';

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const navbar = document.querySelector('.nav-links')
  // console.log(navbar.childNodes);
  navbar.childNodes.forEach(element => {
    element.addEventListener('click', () => {
      isMenuOpen.value = false
    })
  });
})
</script>
<template>
  <header class="navbar">
    <nav class="flex justify-between align-center container">
      <!-- Mobile Menu Toggle Button -->
      <BaseButton class="hamburger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
      </BaseButton>

      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <BaseImage class="width-full desktop-logo" image="https://www.webpoka.com/front/images/logo.png" alt="logo" />
        <BaseImage class="width-full mobile-logo" image="https://www.webpoka.com/front/images/logo.png" alt="logo" />
      </RouterLink>

      <!-- Navigation Links -->
      <div class="flex align-center gap-1">
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <routerLink to="/">About</routerLink>
          </ListItem>
          <ListItem>
            <routerLink to="/">Projects</routerLink>
          </ListItem>
          <ListItem>
            <routerLink to="/">Blogs</routerLink>
          </ListItem>
          <ListItem>
            <routerLink to="/">Gallery</routerLink>
          </ListItem>
          <ListItem>
            <routerLink to="/">Contact</routerLink>
          </ListItem>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.navbar {
  backdrop-filter: blur(50px);
  box-shadow: var(--box-shadow);
  background: var(--dark-color);
  color: var(--white-color);
  padding: 0.75rem 0;
  /* position: fixed;
  top: 0;
  left: 0; */
  position: sticky;
  top: 0;
  width: fit-content;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease;
}

.navbar a {
  text-decoration: none;
}

.logo img {
  height: 55px;
  width: auto;
}

/* logo vissibility hidden/block */
.logo .desktop-logo {
  display: none;
}

.logo .mobile-logo {
  height: 55px;
  width: auto;
}

.nav-links {
  display: flex;
  align-items: center;
}

.navbar ul {
  list-style: none;
  position: fixed;
  top: -100%;
  left: -100%;
  width: 80%;
  margin: 0;
  background: var(--secondary-color);
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;
  transition: 0.3s;
}

.navbar ul.active {
  top: 5rem;
  left: 0;
  color: var(--white-color);
}

.navbar ul li a {
  position: relative;
  display: inline-block;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  padding: 0.5rem 0;
}

.navbar ul li .router-link-exact-active {
  color: var(--primary-light-color);
}

.navbar ul li a:hover {
  color: var(--primary-light-color);
}

.phone-num {
  gap: .5rem;
  padding-left: .75rem;
  font-weight: 500;
}

.phone-num i {
  color: var(--white-color);
  background-color: var(--primary-light-color);
  padding: .5rem;
}

/* Mobile menu toggle */
.hamburger {
  display: block;
  color: var(--white-color);
  border: none;
  cursor: pointer;
}

@media (min-width: 992px) {
  .navbar ul {
    position: inherit;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    padding: 0.75rem 0;
  }

  /* Desktop menu hover effects */
  .navbar ul li a::after,
  .navbar ul li .router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-light-color);
    transition: width 0.3s ease;
  }

  .navbar ul li .router-link-exact-active::after {
    width: 100%;
  }

  .navbar ul li a:hover::after {
    width: 100%;
  }

  /* logo vissibility hidden/block */
  .logo .desktop-logo {
    display: block;
  }

  .logo .mobile-logo {
    display: none;
  }

  /* expand navlinks on desktop  */
  .hamburger {
    display: none;
  }
}
</style>
