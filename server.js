const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cors = require('koa-cors');
const indexController = require('./controller/indexController');

const app = new Koa();

const router = new Router();

router
    .get('/api/aboutUs', indexController.getAboutUs)
    .post('/api/aboutUs', indexController.changeAboutUs);

app
    .use(bodyParser())
    .use(cors())
    .use(router.routes());

app.listen(3000, () => {
   console.log("server started");
});
