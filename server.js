var express = require("express");
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var app = express();

var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public/assets'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
})

connection.connect((err) => {
  if (err) {
    console.log(`Could not connect: ${err.stack}`)
    return
  }

  console.log(`Connected as id ${connection.threadId}`)
})

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Connected on port ${PORT}`)
})