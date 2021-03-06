import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import axios from 'axios'
import VueAxios from "vue-axios";
import HighchartsVue from 'highcharts-vue'
import Vuex from 'vuex'

//TODO 引入路由页面 前一部分为components名, 后一部分为文件相对位置
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
import BuyerSelect from "./components/BuyerSelect";
import SellerSelect from "./components/SellerSelect";
import OtherBuyer from "./components/OtherBuyer";
import OtherSeller from "./components/OtherSeller";
import OtherBuyerCDS from "./components/OtherBuyerCDS";
import OtherSellerCDS from "./components/OtherSellerCDS";
import Register from "./components/Register";
import ApplyLoan from "./components/ApplyLoan";
import ApplyBankGroup from "./components/ApplyBankGroup";
import Applytenable from "./components/Applytenable";
import InstRegister from "./components/InstRegister";
import InformOther from "./components/InformOther";
import Dealing from "./components/Dealing";
import GDealing from "./components/GDealing";
import Guarantee1Deal from "./components/Guarantee1Deal";
import Guarantee2Deal from "./components/Guarantee2Deal";
import O1Dealing from "./components/O1Dealing";
import O2Dealing from "./components/O2Dealing";
import OfflineCommunication from "./components/OfflineCommunication";
import OnlineCommunication from "./components/OnlineCommunication";
import Other1Deal from "./components/Other1Deal";
import Other2Deal from "./components/Other2Deal";
import B1Dealing from "./components/B1Dealing";
import B2Dealing from "./components/B2Dealing";
import Bank1Deal from "./components/Bank1Deal";
import Bank2Deal from "./components/Bank2Deal";

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(HighchartsVue);
Vue.use(Vuex);
Vue.config.productionTip = false

//TODO 配置路由 目前处于开发状态. 在项目部署前请将需要登陆的页面meta值设置为true 可作参考为不同路由对应的组件
const router  = new VueRouter({
  routes:[
    {path:"/", component:Home, meta:{
        isLogin: false
      }},
    {path:'/services', component: Services, meta:{
      isLogin: false
      }},
    {path:'/query', component:Query, meta:{
        isLogin: false
      }},
    {path:'/query/macro', component:MacroQuery, meta:{
        isLogin: false
      }},
    {path:'/information', component:Information, meta:{
        isLogin: false
      }},
    {path:'/query/bank', component:BankQuery, meta:{
        isLogin: false
      }},
    {path:'/login', component:Login, meta:{
        isLogin: false
      }},
    {path:'/services/guarantee', component:Guarantee, meta:{
        isLogin: false
      }},
    {path:'/services/other', component:Other, meta:{
        isLogin: false
      }},
    {path:'/services/loan', component:Loan, meta:{
        isLogin: false
      }},
    {path:'/applyguarantee', component:ApplyGuarantee, meta:{
        isLogin: false
      }},
    {path:'/applyguarantee1', component:ApplyGuarantee1, meta:{
        isLogin: false
      }},
    {path:'/qualification', component:Qualification, meta:{
        isLogin: false
      }},
    {path:'/clause', component:Clause, meta:{
        isLogin: false
      }},
    {path:'/services/other/bselect', component:BuyerSelect, meta:{
        isLogin: false
      }},
    {path:'/services/other/sselect', component:SellerSelect, meta:{
        isLogin: false
      }},
    {path:'/services/other/otherbuyer', component:OtherBuyer, meta:{
        isLogin: false
      }},
    {path:'/services/other/otherseller', component:OtherSeller, meta:{
        isLogin: false
      }},
    {path:'/services/other/otherbuyerc', component:OtherBuyerCDS, meta:{
        isLogin: false
      }},
    {path:'/services/other/othersellerc', component:OtherSellerCDS, meta:{
        isLogin: false
      }},
    {path:'/services/loan/apploan', component:ApplyLoan, meta:{
        isLogin: false
      }},
    {path:'/services/loan/appbankgroup', component:ApplyBankGroup, meta:{
        isLogin: false
      }},
    {path:'/services/loan/applytenable', component:Applytenable, meta:{
        isLogin: false
      }},
    {path:'/register', component:Register, meta:{
        isLogin: false
      }},
    {path:'/instregister', component:InstRegister, meta:{
              isLogin: false
          }},
      {path:'/services/loan/appbankgroup/confirm', component:InformOther, meta:{
              isLogin: false
          }},
      {path:'/dealing', component:Dealing, meta:{
              isLogin: false
          }},
      {path:'/gdealing', component:GDealing, meta:{
              isLogin: false
          }},
      {path:'/services/guarantee/deal1', component:Guarantee1Deal, meta:{
              isLogin: false
          }},
      {path:'/services/guarantee/deal2', component:Guarantee2Deal, meta:{
              isLogin: false
          }},
      {path:'/services/other/deal1', component:Other1Deal, meta:{
              isLogin: false
          }},
      {path:'/services/other/deal2', component:Other2Deal, meta:{
              isLogin: false
          }},
      {path:'/o1dealing', component:O1Dealing, meta:{
              isLogin: false
          }},
      {path:'/o2dealing', component:O2Dealing, meta:{
              isLogin: false
          }},
      {path:'/services/loan/deal1', component:Bank1Deal, meta:{
              isLogin: false
          }},
      {path:'/services/loan/deal2', component:Bank2Deal, meta:{
              isLogin: false
          }},
      {path:'/b1dealing', component:B1Dealing, meta:{
              isLogin: false
          }},
      {path:'/b2dealing', component:B2Dealing, meta:{
              isLogin: false
          }},
  ],
  mode:"history"

})

//TODO 登录状态管理
export const store = new Vuex.Store({
  // 设置属性
  state: {
    isLogin: false,
  },

  // 获取属性的状态
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
  },

  // 应用mutations
  actions: {
    //获取登录状态
    userLogin({commit}, flag) {
      commit("userStatus", flag)
    },
  }
})

router.beforeEach((to, from, next) => {

  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){

    //设置vuex登录状态为已登录
    store.state.isLogin = true
    next()

    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
      //iViewUi友好提示
      ElementUI.Alert("请先退出登录")
      next({
        path: '/home'
      })
    }

    //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/login',
      })
      console.log('请先登录')
      //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
