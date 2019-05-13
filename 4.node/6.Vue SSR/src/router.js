import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import demo from './components/demo.vue';
import about from './components/about.vue';

export default function () {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/demo',
                component: demo
            },
            {
                path: '/about',
                component: about
            }
        ]
    })
}