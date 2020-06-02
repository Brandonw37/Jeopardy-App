import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Register from './components/Register.vue';
import Home from './components/Homepage.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/Register', component: Register },
  { path: '/', component: Home},
  { path: '/Dashboard', component: Dashboard},
  { path: '/Login', component: Login}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.config.productionTip = false
export const serverBus= new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
