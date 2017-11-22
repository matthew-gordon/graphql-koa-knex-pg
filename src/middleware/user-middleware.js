const knex = require('../db/knex')

module.exports = async (ctx, next) => {
  // grab jwt from ctx state
  const jwt = ctx.state.jwt
  // verify user
  if (jwt) {
    // set user on ctx state (best practice according to docs)
    ctx.state.user = await ctx.app.db('users')
      .first(
        'id',
        'email',
        'username'
      )
      .where({id: jwt.sub})
  }
  // continue through middleware
  return next()
}
