
const Joi = require('joi')

const registerSchema = Joi.object({
 user_name:Joi.string()
 .alphanum()
 .min(3)
 .required(),

 email:Joi.string()
 .required()
 .email(),
 
password:Joi.string()
.alphanum()
.required()
.min(8)
});
module.exports = registerSchema;