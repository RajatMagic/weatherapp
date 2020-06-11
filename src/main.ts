import Vue from 'vue' 
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'beautify-scrollbar/dist/index.css';

// Vue.component("datepicker", Datepicker);
// Vue.use(vClickOutside);
// Vue.use(V2LazyList);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
