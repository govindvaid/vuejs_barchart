// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as d3 from 'd3'
import charts from './v-charts'

Vue.config.productionTip = false
Vue.use(charts);

Object.defineProperty(Vue.prototype, '$d3', {value: d3});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
