<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 3.使用组件标签 -->
    <HelloWorld/>
  </div>
</template>

<script>
// 1.引入组件
import HelloWorld from './components/HelloWorld'

export default {
  // 2.映射组件标签
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  width:200px;
  height: 200px;
  background-color: #bfa;
}
</style>
