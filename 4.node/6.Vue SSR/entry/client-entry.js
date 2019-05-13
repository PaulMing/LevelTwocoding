import createApp from '../src/app.js';
const app = createApp();

window.onload = function () {
    app.$mount('#app');
}