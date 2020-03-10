import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

Vue.config.productionTip = false

let instance = null;
let router = null;

function render() {
  router = createRouter(window.__POWERED_BY_QIANKUN__ ? '/subapp' : '/')
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

export async function bootstrap() {
  console.log('subapp bootstrap')
}
export async function mount() {
  console.log('subapp mount')
  render()
}

export async function unmount() {
  console.log('subapp unmount')
  instance.$destroy();
  instance = null;
}