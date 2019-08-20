import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import axios from 'axios'
import VueAxios from "vue-axios";

//引入路由页面
import Services from "./components/Services";
import Home from "./components/Home";
import Query from "./components/Query";
import MacroQuery from "./components/MacroQuery";
import Information from "./components/Information";
import BankQuery from "./components/BankQuery";
import Login from "./components/Login";

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

//配置路由
const router  = new VueRouter({
  routes:[
    {path:"/", component:Home},
    {path:'/services', component: Services},
    {path:'/query', component:Query},
    {path:'/query/macro', component:MacroQuery},
    {path:'/information', component:Information},
    {path:'/query/bank', component:BankQuery},
    {path:'/login', component:Login},
  ],
  mode:"history"

})


// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
