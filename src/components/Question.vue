<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <div class="question">
      <input
        type="text"
        class="question-title-input"
        placeholder="Ask an intervue question"
        v-model="questionTitle"
        />
      <input
        type="text"
        class="question-body-input"
        placeholder="Tell me about this question of yours"
        v-model="questionBody"
        />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: 'Question',
  data () {
    return {
      questionTitle: '',
      questionBody: '',
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
