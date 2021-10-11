<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <Hero/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Hero,
    Main,
    Footer
  }
}
</script>

<style lang="scss">

</style>
