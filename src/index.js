const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const PORT = process.env.PORT || 3000

router.get('/', async (ctx) => {
  ctx.body = 'Hello World'
})

app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})
