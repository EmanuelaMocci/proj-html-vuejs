<template>
  <div id="app">
    <Header :logo="require('./assets/img/dark-pet-logo.png')" :lists="menu"/>
    <Hero/>
    <Main/>
    <Footer :logo="require('./assets/img/mobile-light-pet-logo-2x-400x105.png')" :shopLists="shopList" :links="link" :footerLists="footerBottom"/> 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Main,
    Footer
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
      ],
      shopList: [
        {
          titoloLista: 'Shop by brand'
        },
        {
          titolo: 'Bed'
        },
        {
          titolo: 'Food'
        },
        {
          titolo: 'Toys'
        },
        {
          titolo: 'Transport'
        }
      ],
      link: [
        {
          titoloLink: 'Useful links'
        },
        {
          titolo: 'My account'
        },
        {
          titolo: 'Orders'
        },
        {
          titolo: 'Checkout'
        },
        {
          titolo: 'Cart'
        }
      ],
      footerBottom: [
        {
          titolo: 'Home',
          url: '#',
          stato: true
        },
        {
          titolo: 'About',
          url: '#',
          stato: false
        },
        {
          titolo: 'Blog',
          url: '#',
          stato: false
        },
        {
          titolo: 'Contacts',
          url: '#',
          stato: false
        },
        {
          titolo: 'Shop',
          url: '#',
          stato: false
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
