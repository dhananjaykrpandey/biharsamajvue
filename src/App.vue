<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Headertmp from './components/Headertmp.vue';
import TheWelcome from './components/home.vue'
import footertmp from './components/footertmp.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
      <Headertmp />
    </header>

    <div class="container">
      <main>
        <RouterView></RouterView>
      </main>
    </div>

    <!-- <main>
    <TheWelcome />
  </main> -->
    <footer id="footer" class="footer">
      <footertmp />
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
