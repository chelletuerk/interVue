<template>
  <div>
    <div
      class="display"
      v-for="question in questions"
      :key="question.title">
        <u><b>Question</b></u>: {{ question.title }} <br/>
        <u><b>Description</b></u>: {{ question.body }}
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

  export default {
    props: ['questions'],
    name: 'Display',
  }
</script>

<style scoped>
  .display {
    height: 100px;
    width: 35%;
    min-width: 240px;
    border: solid #2c3e50 1px;
    border-radius: 4px;
    margin: auto;
    margin-top: 30px;
    -webkit-box-shadow: 9px 10px 36px 1px rgba(0,0,0,0.42);
    box-shadow: 9px 10px 36px 1px rgba(0,0,0,0.42);
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 27px;
    text-align: left;
    word-wrap: break-word;
    overflow-y: scroll;
    line-height: 2;
  }

</style>
