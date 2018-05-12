<template>
  <div class="question">
    <h1>{{ msg }}</h1>
    <input class="question-title-input" placeholder="Ask an intervue question"></input>
    <input class="question-body-input" placeholder="Tell me about this question of yours"></input>
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

.question-title-input, .question-body-input {
  width: 60%;
  min-width: 200px;
  height: 5vh;
  margin: 1%;
  border-radius: 4px;
  border: solid #2c3e50 1px;
}

input::placeholder {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
  padding-left: 10px;
}

</style>
