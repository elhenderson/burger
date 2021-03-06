var express = require('express');
var burger = require("../models/Burger.js")

var router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    var hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  })
})

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body.burger, () => {

  res.redirect("/")
  })
})

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, (data) => {
    console.log(data);

    console.log("Devoured!");
    res.redirect("/")
  })
})

module.exports = router;