import Vue from 'vue';
import Router from 'vue-router';
import SuperMarket from '@/views/SuperMarket';
import Product from '@/views/Product';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'supermarket',
      component: SuperMarket
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      props: true
    },
  ]
})