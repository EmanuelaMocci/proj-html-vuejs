import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import AOS from 'aos'
import 'aos/dist/aos.css'
new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')

