import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/TodoList/todoList.vue';
import Login from '@/components/auth/Login';
import store from '../store/store';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next) {
      if (!store.state.token) {
        next();
      } else {
        next('/todo');
      }
    }
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoList,
    beforeEnter(to, from, next) {
      if (store.state.token) {
        next();
      } else {
        next('/');
      }
    }
  }
];
export default new Router({ mode: 'history', routes });
