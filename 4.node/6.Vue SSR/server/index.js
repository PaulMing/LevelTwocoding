const express = require('express');
const path = require('path');
const ServerRenderer = require('vue-server-renderer');
const fs = require('fs');


const renderer = ServerRenderer.createBundleRenderer(path.resolve('../dist/vue-ssr-server-bundle.json'),{
    template: fs.readFileSync('./index.template.html', 'utf8')
});
const app = express();



app.use(express.static('../dist'));
app.get("*", function (req, res) {
    console.log(req.url)
    renderer.renderToString( {
        init: '<script src="./client.bundle.js"></script>',
        url: req.url
    }, function (err, html) {
        console.log(html)
        if(err) {
            throw err;
        } else {
           res.end(html);
        }
    })
})

app.listen(8080, function () {
    console.log('server is running at 8080')
})