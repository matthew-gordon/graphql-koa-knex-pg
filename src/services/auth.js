 const {
  createUser,
  generateJWTforUser,
  getUser,
  comparePass
} = require('../lib/utils')

module.exports = {
  async register(user) {

    try {
      // create user with helper function
      const result = await createUser(user)
      // generate user with token
      const payload = await generateJWTforUser(result[0])

      return payload
    } catch (err) {
      throw new Error(err.message)
    }
  },

  async login(user) {
    const {username, password} = user

    try {
      // get user from DB with helper function
      const user = await getUser(username)
      
      // compare password to hash in DB
      const response = await comparePass(password, user.password)
      // generate token for authenticated user
      const payload = generateJWTforUser(user)

      return payload
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
