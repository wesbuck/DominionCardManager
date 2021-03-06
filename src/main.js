import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store';
import './../node_modules/jquery/dist/jquery.slim';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle';

Vue.config.productionTip = false
Vue.prototype.$endpointURL = 'https://dominioncardapi.pythonanywhere.com'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//set <title> based on the page we're loading
router.beforeEach((to, from, next) => {
  document.title = `Dominion Card Manager - ${to.meta.title}`
  next()
})