require('env2')('.env');
const {Pool} = require('pg');

let db_url= '';

if(process.env.NODE_ENV === 'dev'){
  db_url=process.env.DB_URL;
} else{
throw new Error("Data Base Not found ...")
}



const connection = new Pool({
 connectionString:db_url,
 ssl:false
});

module.exports = connection;