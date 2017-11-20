const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()
const PORT = process.env.PORT || 3000

const routes = require('./routes')

app.use(bodyParser())
app.use(routes.routes())
app.use(routes.allowedMethods())

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
