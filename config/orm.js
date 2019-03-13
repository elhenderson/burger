var connection = require("./connection")

class orm {
    constructor(selectAll, insertOne, updateOne) {
        this.selectAll = () => {
            connection.query("SELECT * FROM burgers", (err, data) => {
                if (err) throw err;

            })
        }
        this.insertOne = () => {

        }
        this.updateOne = () => {

        }
    }
}

module.exports = orm;