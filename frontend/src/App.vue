<template>
  <div id="app">
      <nav>Menu</nav>
      <div>Content</div>
      <aside>Ranking</aside>
      <footer>Footer</footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap');
    * {
      font-family: 'Asap', sans-serif;
    }

    body {
        margin: 0;
    }

    #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      height: 100vh;
      display: grid;

      
    }
</style>
