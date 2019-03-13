var express = require("express");
var exphbs = require('express-handlebars');


var app = express();
var routes = require('./controllers/burgers_controller');
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public/assets'));
app.use(routes);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Connected on port ${PORT}`)
})