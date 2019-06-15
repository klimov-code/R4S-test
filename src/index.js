import Vue from 'vue';

import './plugins/vuex';
import './plugins/bootstrap';

import App from './App';
import store from './store';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
