import Vue from 'vue'
// import Vue from "vue/dist/vue.common.js";
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)
//k+1
new Vue({
    render: h=>h(App)
}).$mount(root)
