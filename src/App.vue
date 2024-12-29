<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item"><router-link class="navbar__link" to="/">Home</router-link></li>
      <li class="navbar__item"><router-link class="navbar__link" to="/login">Login</router-link></li>
      <li class="navbar__item"><router-link class="navbar__link" to="/signUp">Sign Up</router-link></li>
    </ul>
  </nav>
  <router-view/>

</template>

<style lang="scss" scoped>
$navbar-bg: #f8f9fa;
$link-color: #007bff;
$link-hover-color: #0056b3;
$shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Bloque principal: Navbar */
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: $navbar-bg;
  padding: 1rem;
  box-shadow: $shadow;

  &__list {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  &__item {
    font-size: 1rem;
  }

  &__link {
    text-decoration: none;
    color: $link-color;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: $link-hover-color;
      text-decoration: underline;
    }

    &--active {
      font-weight: bold;
    }
  }
}
</style>