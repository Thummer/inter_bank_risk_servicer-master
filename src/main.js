import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import axios from 'axios'
import VueAxios from "vue-axios";
import HighchartsVue from 'highcharts-vue'

//引入路由页面
import Services from "./components/Services";
import Home from "./components/Home";
import Query from "./components/Query";
import MacroQuery from "./components/MacroQuery";
import Information from "./components/Information";
import BankQuery from "./components/BankQuery";
import Login from "./components/Login";
import Guarantee from "./components/Guarantee";
import Other from "./components/Other";
import Loan from "./components/Loan";
import ApplyGuarantee from "./components/ApplyGuarantee";
import ApplyGuarantee1 from "./components/ApplyGuarantee1";
import Qualification from "./components/Qualification";
import Clause from "./components/Clause";

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(HighchartsVue);
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
    {path:'/services/guarantee', component:Guarantee},
    {path:'/services/other', component:Other},
    {path:'/services/loan', component:Loan},
    {path:'/applyguarantee', component:ApplyGuarantee},
    {path:'/applyguarantee1', component:ApplyGuarantee1},
    {path:'/qualification', component:Qualification},
    {path:'/clause', component:Clause},
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
