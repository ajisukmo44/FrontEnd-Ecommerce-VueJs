import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import storeData from './store'


Vue.use(Vuex)

Vue.config.productionTip = false
const store = new Vuex.Store(storeData)

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
