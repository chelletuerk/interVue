<template>
  <button
    class="button"
    v-on:click="addQuestion"
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
    methods: {
      addQuestion: function() {
        this.$emit('addQuestion')
      }
    }
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
