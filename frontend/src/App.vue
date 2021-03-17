<template>
  <div id="app">
      <Menu/>
      <div style="grid-area: content;">Content</div>
      <aside style="grid-area: aside;">Ranking</aside>
      <footer style="grid-area: footer;">Footer</footer>
  </div>
</template>

<script>
import Menu from './components/template/Menu'

export default {
  name: 'App',
  components: {Menu}
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
        grid-template-rows: 80px 1fr 40px;
        grid-template-columns: 65% 35%;
        
        grid-template-areas:
            'menu menu'
            'content aside'
            'footer footer'
      }
</style>
