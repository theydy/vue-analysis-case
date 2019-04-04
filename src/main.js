import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('comA', {
  template: '<div>comA</div>'
})

new Vue({
  el: '#app',
  render: h => h(App),
})
