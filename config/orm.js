
var connection = require("./connection.js");

var orm = {

    selectAll: function(tableName, callBack){//callback function solves the asynchronous problem

        connection.query("SELECT * FROM " + tableName + ";", function(err, res){

            if(err){throw err};

            callBack(res);//give them back the result :D

        });

    },


    insertOne: function(tableName, burgerName, callBack){//only inserting one so we just need to take in the data to insert(devoured and id both autoset values so only need name)

        var query = "INSERT INTO " + tableName;
        query += " (burger_name) VALUES(?);";
        connection.query(query,[burgerName],function(err,res){

            if(err){throw err};

            callBack(res);

        });

    },

    updateOne: function(tableName, burgerId,callBack){
        console.log("burger id: " + burgerId);
        var query = "UPDATE " + tableName;
        query += " SET devoured = 1"
        query += " WHERE id = " + burgerId;
        connection.query(query,function(err,res){

             if(err){throw err};

             callBack(res);

        });

    }

};

module.exports = orm;