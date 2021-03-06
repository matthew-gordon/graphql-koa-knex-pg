require('dotenv').config()

const start = async () => {
  const http = require('http')
  const Koa = require('koa')
  const Router = require('koa-router')
  const bodyParser = require('koa-bodyparser')
  const cors = require('kcors')
  const config = require('./config')

  const app = new Koa()
  const router = new Router()
  const PORT = process.env.PORT || 3000

  const routes = require('./routes')

  const db = require('./middleware/db-middleware')
  const jwt = require('./middleware/jwt-middleware')
  const user = require('./middleware/user-middleware')

  app.use(db(app))
  app.use(bodyParser())
  app.use(cors(config.cors))

  app.use(jwt)
  app.use(user)

  app.use(routes.routes())
  app.use(routes.allowedMethods())
  app.server = http.createServer(app.callback())

  await app.server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
}

start()
