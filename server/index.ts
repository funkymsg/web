import Koa from 'koa'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import {buzz} from './buzz'

const app = new Koa();
const router = new Router()

router.get('/:text', html)
router.get('/:text/:title/', html)
router.get('/:text/:title/:description/', html)
router.get('/:text/:title/:description/:img', html)

function html(ctx:Koa.ParameterizedContext){
    ctx.type = 'text/html'
    ctx.body = buzz(ctx.params)
}

app.use(koaStatic('js'))
app.use(koaStatic('css'))
app.use(koaStatic('html'))
app.use(koaStatic('img'))
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000);
