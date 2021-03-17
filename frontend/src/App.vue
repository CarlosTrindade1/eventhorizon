<template>
  <div id="app">
      <Menu/>
      <Content/>
      <Ranking/>
      <Footer/>
  </div>
</template>

<script>
import Menu from './components/template/Menu'
import Footer from './components/template/Footer'
import Content from './components/template/Content'
import Ranking from './components/template/Ranking'

export default {
  name: 'App',
  components: {Menu, Footer, Content, Ranking}
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
