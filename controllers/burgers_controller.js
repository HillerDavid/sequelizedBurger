var express = require("express");
let db = require("../models")
var router = express.Router();

//ROUTER
router.get("/", (req, res) => {
    db.Burger.findAll({}).then(burgers => {
        res.render("index", { burgers })
    })
})

router.put("/api/burgers/:id", (req, res) => {
    db.Burger.update({ devoured: true }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.end()
    })
})

router.post("/api/burgers/", (req, res) => {
    db.Burger.create({ burger_name: req.body.burger_name }).then(() => {
        res.redirect('/')
    })
})
module.exports = router