var connection = require("./connection")

var orm = {
    selectAll: (tableInput, cb) => {
        var query = `SELECT * FROM ${tableInput};`;
        connection.query(query, (err, data) => {
            if (err) throw err;

            cb(data);
        })
    },
    insertOne: (tableInput, itemToAdd, cb) => {
        var query = `INSERT INTO ${tableInput} (burger_name, devoured) VALUE (?,?);`;
        connection.query(query, [`${itemToAdd}`, 0], (err, data) => {
            if (err) throw err;

            cb(data);
        })
    },
    updateOne: (tableInput, id, cb) => {
        var query = `UPDATE ${tableInput} SET devoured = 1 WHERE id = (?);`;
        connection.query(query, [`${id}`], (err, data) => {
            if (err) throw err;

            cb(data);
        })
    }
}

module.exports = orm;