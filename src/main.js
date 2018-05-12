import Vue from 'vue'
import App from './App'
import styles from './assets/styles/main.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
