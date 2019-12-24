import Demo from './components/demo.vue'
const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    render: h => h(Demo)
}).$mount('#app')