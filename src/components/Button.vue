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
    height: 30px;
    width: 80px;
    border-radius: 4px;
  }

  .button:hover {
    background-color: gray;
    color: white;
  }

  
</style>
