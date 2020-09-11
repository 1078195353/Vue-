<template>
  <div>
    <p class="msg">{{msg}}</p>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg{
    background-color: red;
    font-size: 30px;
  }
</style>
