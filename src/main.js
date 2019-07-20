import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueInputAutoWidth from 'vue-input-autowidth'

Vue.config.productionTip = false

Vue.use(VueInputAutoWidth)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
