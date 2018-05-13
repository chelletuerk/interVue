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
        placeholder="Tell me about this question of yours"
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
  props: ['appTitle', 'submit'],
  name: 'Question',
  components: {
    Button
  },
  methods: {
    eventHandler() {
      console.log(this)
      this.submit(this.title, this.body)
      this.title = ''
      this.body = ''
    }
  },
  data () {
    return {
      title: '',
      body: '',
    }
  }
}
</script>

<style scoped>
  h1 {
    font-weight: normal;
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
  }

  input::placeholder {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    padding-left: 10px;
  }
</style>
