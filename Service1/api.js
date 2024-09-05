const express = require('express');

const app = express();
app.use(express.json());
const port = 1233;

const routes = require('./routers/index');

for(router of routes.router) {
    app.use('/api',router);
}

app.listen(port,()=>{
    console.log(`Service 1 running in port ${port}`);
})