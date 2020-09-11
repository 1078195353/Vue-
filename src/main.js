import Vue from 'vue'
import App from './App.vue'
import './base.css'

let vm = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
Vue.use({
    vm
})
