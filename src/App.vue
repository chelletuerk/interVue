<template>
  <div id="app">
    <Question v-bind:title="title"/>
    <Button v-on:addQuestion="createQuestion"/>
  </div>
</template>

<script>
import Question from './components/Question'
import Button from './components/Button'

export default {
  name: 'App',
  components: {
    Question,
    Button
  },
  methods: {
    createQuestion() {
      alert('fjdhksal')
    }
  },
  data() {
    return {
      title: 'interVue'
    }
  }
}
</script>
