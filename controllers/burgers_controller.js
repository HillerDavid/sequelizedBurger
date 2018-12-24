var express = require("express");

var router = express.Router();

let burger = require('../models/burger.js')

//ROUTER
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        let burgersObject = {
            burgers: data
        }
        res.render("index", burgersObject)
    })
})

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id

    burger.updateOne(condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

router.post("/api/burgers/", (req, res) => {
    burger.insertOne(req.body.burger_name, (result) => {
        res.json(result)
    })
})
module.exports = router