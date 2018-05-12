<template>
  <div class="question">
    <h1>{{ msg }}</h1>
    <input class="question-input" placeholder="Ask an intervue question"></input>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data () {
    return {
      msg: 'interVue'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
