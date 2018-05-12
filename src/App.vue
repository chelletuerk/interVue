<template>
  <div id="app">
    <Question
      v-bind:submit="submit"
      v-bind:appTitle="appTitle"
    />
  </div>
</template>

<script>
import Question from './components/Question'

export default {
  name: 'App',
  components: {
    Question,
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
