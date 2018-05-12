<template>
  <div id="app">
    <Question/>
    <Button/>
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
  }
}
</script>
