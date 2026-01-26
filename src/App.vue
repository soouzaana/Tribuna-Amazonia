<script setup>
import Header from './components/HeaderItem.vue'
import Home from './pages/HomePage.vue'
import Footer from './components/FooterItem.vue'
</script>

<template>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <div class="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>
