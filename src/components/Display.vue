<template>
  <div>
    <div
      class="display animated flipInX"
      v-for="question in questions"
      :key="question.title">
        <div><span class="titleObj">Question</span>: {{ question.title }}</div>
        <div><span class="bodyObj">Description</span>: {{ question.body }}</div>
        <div><span class="urlObj">Url</span>:<a :href="question.sidebarVal"  target="_blank"> {{ question.sidebarVal }}</a></div>
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
    background: linear-gradient(to top left, #ff1493, lightgray);
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
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

  .titleObj, .bodyObj, .urlObj {
    text-decoration: underline;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 15px;
  }

</style>
