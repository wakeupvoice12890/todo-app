import Vue from 'vue';
import Login from '@/components/auth/Login';

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.container h3').textContent)
      .toEqual('Authentication');
  });
});
