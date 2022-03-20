const app = require("./app");

app.listen(app.get('port') , ()=>{
  console.log(`server is running on http://localhost:${app.get('port')}`);
});