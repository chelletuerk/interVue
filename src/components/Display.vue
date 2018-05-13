<template>
  <div>
    <div
      class="display"
      v-for="question in questions"
      :key="question.title">
        Question: {{ question.title }} <br/>
        Description: {{ question.body }}
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
