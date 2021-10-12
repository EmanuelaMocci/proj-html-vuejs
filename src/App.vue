<template>
  <div id="app">
    <Header :logo="require('./assets/img/dark-pet-logo.png')" :lists="menu"/>
    <Hero/>
    <Main/>
    <!-- <Footer/>  -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Main,
    // Footer
  },
  data(){
    return{
      menu: [
        {
          titolo: 'Home',
          url: '#',
          stato: true,
          chevron: true
        },
        {
          titolo: 'Shop',
          url: '#',
          stato: false,
          chevron: true
        },
        {
          titolo: 'About',
          url: '#',
          stato: false,
          chevron: false
        },
        {
          titolo: 'Blog',
          url: '#',
          stato: false,
          chevron: false
        },
        {
          titolo: 'Contact',
          url: '#',
          stato: false,
          chevron: false
        },
        {
          titolo: 'Shop by brand',
          url: '#',
          stato: false,
          chevron: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

</style>
