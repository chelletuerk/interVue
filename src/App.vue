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
      this.questions.push({title, body})
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
