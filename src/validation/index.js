const registerSchema = require('./registerSchema');
const {signToken} = require('./createToken')
const {costumizesErr} = require('./costumizedErr') 
module.exports = {
  registerSchema,
  signToken,
  costumizesErr

};