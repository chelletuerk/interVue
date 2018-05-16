<template>
  <div id="app">
    <Question
      v-bind:submit="submit"
      v-bind:appTitle="appTitle"
      v-bind:fetchApiQuestions="fetchApiQuestions"
      v-bind:fetchApiUrl="fetchApiUrl"
    />
    <Display v-bind:questions="questions"/>
  </div>
</template>

<script>
import Question from './components/Question'
import Display from './components/Display'

export default {
  name: 'App',
  components: {
    Question,
    Display,
  },
  methods: {
    submit(title, body) {
      const $sidebar = $('#url')
      this.questions.push({title, body, sidebarVal: $sidebar.val()})
      $sidebar.val('')
  },
  fetchApiQuestions: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/v1/questions',
      crossDomain: true,
      dataType: 'jsonp',
      success: function() {
       this.apiQuestions = apiQuestions
        }
      })
    },
  fetchApiUrl: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/v1/url',
      crossDomain: true,
      dataType: 'jsonp',
      success: function(apiUrl) {
        this.apiUrl = apiUrl
        }
     })
   },
  postApiQuestion: function() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/v1/questions',
      crossDomain: true,
      dataType: 'jsonp',
      success: function(res) {
          console.log(res)
      }
    })
  },
  },
  data() {
    return {
      appTitle: 'interVue',
      questions: [],
      apiQuestions: '',
      apiUrl: '',
    }
  }
}
</script>
