import Vue from 'vue';

import 'regenerator-runtime/runtime';

import './plugins/bootstrap';
import './plugins/vuex';

import App from './App';
import { store } from './store';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
