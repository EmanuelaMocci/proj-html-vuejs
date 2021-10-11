<template>
  <div id="app">
    <!-- <Header/> -->
    <Header :logo="require('./assets/img/dark-pet-logo.png')"/>
    <!-- <Navbar/>
    <Hero/>
    <Main/>
    <Footer/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Navbar from './components/Navbar.vue'
// import Hero from './components/Hero.vue'
// import Main from './components/Main.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header
    // Navbar,
    // Hero,
    // Main,
    // Footer
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.css';

</style>
