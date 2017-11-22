const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql

const UserType = require('../types/user_type')
const AuthService = require('../../services/auth')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, context) {
        // if (!context.user) throw new Error('You must be authenticated to perform this request')
        return AuthService.register(args, context)
      }
    },
    login: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, context) {
        // if (!context.user) throw new Error('You must be authenticated to perform this request')
        return AuthService.login(args, context)
      }
    }
  }
})

module.exports = mutation
