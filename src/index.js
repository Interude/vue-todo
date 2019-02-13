import Vue from 'vue'
import App from './app.vue'
import './assest/img/scan.jpg'
import './style/test.css'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
render:(h) => h(App)

}).$mount(root)