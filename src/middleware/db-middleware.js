const config = require('../config')

module.exports = function (app) {
  const db = config.db

  app.db = db

  return async (ctx, next) => {
    return next()
  }
}
