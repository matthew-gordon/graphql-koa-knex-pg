const Router = require('koa-router')
const router = new Router()
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const GraphQLSchema = require('../schema/schema')

router.get('/graphiql', graphiqlKoa({ endpointURL: '/api/graphql' }));
router.post('/graphql', graphqlKoa((ctx) => {
  const {user} = ctx.state

  return {
    schema: GraphQLSchema,
    context: { user }
  }
}))

module.exports = router.routes()
