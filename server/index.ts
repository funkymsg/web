import Koa from 'koa'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import { buzz } from './buzz'

const app = new Koa();
const router = new Router()

router.get('/:img/:title/:description/:msg/', html)

function html(ctx: Koa.ParameterizedContext) {
    ctx.response.type = 'html'
    ctx.body = buzz(ctx.params)
}

app.use(koaStatic('s'))
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080, '0.0.0.0');
