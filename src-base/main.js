/*  
入口js：创建Vue实例
*/
// 引入Vue
import Vue from 'vue'
// 引入App 组件
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
