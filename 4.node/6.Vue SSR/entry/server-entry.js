import createApp from '../src/app.js';

export default function (ctx) {
    const app = createApp();
    app.$router.push(ctx.url);
    return app;
}