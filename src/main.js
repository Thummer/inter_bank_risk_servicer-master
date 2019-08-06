import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false


// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
