const createNewUserQuery = require('./queries/register/createNewUserQuery');
const getUserByEmailQuery = require('./queries/register/getUserByEmailQuery')
const {logUserQuery} = require('./queries/login.js/logUserQuery')

module.exports ={
  createNewUserQuery,
  getUserByEmailQuery,
  logUserQuery
}