<template>
  <div class="header">
    <h1>{{ appTitle }}</h1>
    <div class="question">
      <input
        type="text"
        class="title-input"
        placeholder="Ask an intervue question"
        v-model="title"
        />
      <input
        type="text"
        class="body-input"
        placeholder="Describe this question of yours..."
        v-model="body"
        />
      <div class="submit-wrapper">
        <Button
          v-on:submit="eventHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
  props: ['appTitle', 'submit', 'fetchApiQuestions', 'fetchApiUrl'],
  name: 'Question',
  components: {
    Button
  },
  methods: {
    eventHandler() {
      this.submit(this.title, this.body)
      this.fetchApiQuestions()
      this.fetchApiUrl()
      this.title = ''
      this.body = ''
    },
  },
  data () {
    return {
      title: '',
      body: '',
      apiQuestions: '',
      apiUrl: '',
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
    color: #bfefff;
    font-size: 80px;
    text-shadow: #20b2aa 0 0 10px, #ff1493 5px 5px 5px;
  }

  .title-input, .body-input {
    width: 50%;
    min-width: 330px;
    height: 5vh;
    margin: 1%;
    border-radius: 4px;
    border: solid #2c3e50 1px;
    -webkit-box-shadow: 9px 10px 36px -9px rgba(0,0,0,0.42);
    -moz-box-shadow: 9px 10px 36px -9px rgba(0,0,0,0.42);
    box-shadow: 9px 10px 36px -9px rgba(0,0,0,0.42);
    background-color: #bfefff;
  }

  input::placeholder {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    padding-left: 10px;
  }

  input[type="text"] {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
  }
</style>
