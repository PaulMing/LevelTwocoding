import Vue from 'vue';
import app from './app.vue'
import createRouter from './router.js'
export default function () {
    return new Vue({
        components: {
            app
        },
        router: createRouter(),
        template: '<app></app>'
    })
}