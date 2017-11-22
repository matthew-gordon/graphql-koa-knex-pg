const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const uuid = require('uuid')
const moment = require('moment')
const knex = require('../db/knex')

function createUser(user) {
  const {email, username, password} = user
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(password, salt)

  return knex('users')
    .insert({
      id: uuid(),
      email,
      username,
      password: hash
    })
    .returning('*')
}

function getUser(username) {
  return knex('users')
    .where({ username })
    .first()
}

function generateJWTforUser(user = {}) {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id
  }

  const userJwt = Object.assign({}, user, {
    token: jwt.sign(payload, process.env.TOKEN_SECRET, {})
  })

  return userJwt
}

function comparePass(userPassword, dbPassword) {
  const bool = bcrypt.compareSync(userPassword, dbPassword)
  if (!bool) throw new Error('Incorrect username/password')
  else return true
}

module.exports = {
  createUser,
  generateJWTforUser,
  getUser,
  comparePass
}
