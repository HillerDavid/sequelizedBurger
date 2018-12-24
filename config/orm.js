let connection = require('../config/connection.js')

let orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    insertOne: function (cols, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", cols, (err, result) =>{
            if (err) throw err
            cb(result)
        })
    },

    updateOne: function (condition, cb) {
        let queryString = "UPDATE burgers SET devoured=TRUE WHERE "
        queryString += condition
        console.log(queryString)
        connection.query(queryString, function (err, result){
            
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm