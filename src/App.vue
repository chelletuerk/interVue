<template>
  <div id="app">
    <Question
      v-bind:submit="submit"
      v-bind:appTitle="appTitle"
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
    }
  },
  data() {
    return {
      appTitle: 'interVue',
      questions: [],
    }
  }
}
</script>
