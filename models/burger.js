let orm = require('../config/orm.js')

let burger = {
    selectAll: function (cb) {
        orm.selectAll((res) => {
            cb(res)
        })
    },

    insertOne: function (cols, cb) {
        orm.insertOne(cols, (res) => {
            cb(res)
        })
    },

    updateOne: function (id, cb) {
        orm.updateOne(id, (res) => {
            cb(res)
        })
    }
}

module.exports = burger