
var express = require("express");
var burgers = require("../models/burgers.js");

router = express.Router();

router.get("/",function(req,res){

    burgers.all(function(data){

        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index",burgersObj);

    });

});


router.put("/devour",function(req,res){

    console.log(req.body.burgerId);

    burgers.update(req.body.burgerId, function(data){

        console.log(data);
        res.redirect("/");

    });

});

router.post("/insert",function(req,res){

    console.log(req.body);
    burgers.insert(req.body.burgerName,function(data){

        console.log(data)
        res.redirect("/");

    });

});

router.put("/", function(req,res){

    burgers.all(function(data){

        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index",burgersObj);

    });

});

module.exports = router;