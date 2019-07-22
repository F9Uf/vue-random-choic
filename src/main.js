import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueInputAutoWidth from 'vue-input-autowidth'
require('vue2-animate/dist/vue2-animate.min.css');

Vue.config.productionTip = false

Vue.use(VueInputAutoWidth)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
