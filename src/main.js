import Vue from 'vue'
import App from './App'
import styles from './assets/styles/main.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  data:{
        questions: '',
        url: ''
    },
    created: function () {
       this.fetchApiQuestion()
       this.fetchApiUrl()
    },
    methods: {
       fetchApiQuestion: function () {
         $.ajax({
           type: 'GET',
           url: 'http://localhost:3000/api/v1/questions',
           crossDomain: true,
           dataType: 'jsonp',
           success: function(apiQuestion) {
             this.apiQuestion = apiQuestion
           }
        })
      },
      fetchApiUrl: function () {
        $.ajax({
          type: 'GET',
          url: 'http://localhost:3000/api/v1/url',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(apiUrl) {
            this.apiUrl = apiUrl
          }
       })
      }
   },
  template: '<App/>'
})
