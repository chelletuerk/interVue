<template>
  <button
    class="button"
    v-on:click="$emit('submit')"
    >{{ msg }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    data() {
      return{
        msg: 'Submit'
      }
    },
  }

</script>

<style scoped>
  .button {
    height: 40px;
    width: 100px;
    border-radius: 4px;
    background-color: #bfefff;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: #2c3e50;
  }

  .button:hover {
    background-color: gray;
    color: white;
  }


</style>
