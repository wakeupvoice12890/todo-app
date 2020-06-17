// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import router from './router';
import store from './store/store';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.filter('Uppercase', value => value.toUpperCase());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App,
  },
  template: '<App/>',
});
