const registerSchema = require('./registerSchema');
const {signToken,checkToken} = require('./promiseToken')
const {costumizesErr} = require('./costumizedErr') 
const {loginSchema} = require('./loginSchema')
module.exports = {
  registerSchema,
  signToken,
  costumizesErr,
  loginSchema,
  checkToken
};