const Joi = require('joi')

const loginSchema = Joi.object({
email:Joi.string()
.required()
.email(),

password:Joi.string()
.required()
.alphanum()
.min(8)


});

module.exports={
  loginSchema
};