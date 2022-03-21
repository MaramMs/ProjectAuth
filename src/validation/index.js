const registerSchema = require('./registerSchema');
const {signToken} = require('./createToken')
const {costumizesErr} = require('./costumizedErr') 
const {loginSchema} = require('./loginSchema')
module.exports = {
  registerSchema,
  signToken,
  costumizesErr,
  loginSchema
};