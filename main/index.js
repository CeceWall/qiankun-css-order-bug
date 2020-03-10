import { registerMicroApps, start } from 'qiankun';
import render from './render';

render({ appContent: '' })

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  {
    name: 'subapp', // app name registered
    entry: '//localhost:7100',
    render,
    activeRule: genActiveRule('/subapp'),
  },
]);

start({
  prefetch: false,
  jsSandbox: true,
  singular: false,
  fetch: window.fetch,
});