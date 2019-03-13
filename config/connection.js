var mysql = require('mysql');

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

module.exports = connection;