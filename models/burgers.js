
var orm = require("../config/orm.js");

var burgers = {

    all: function(callBack){

        orm.selectAll("burgers",function(res){

            callBack(res);

        });

    },

    insert: function(burgerName, callBack){

        orm.insertOne("burgers",burgerName, function(res){

            callBack(res);

        });

    },

    update: function(burgerId, callBack){

        orm.updateOne("burgers",burgerId, function(res){

            callBack(res);

        });

    }

};

module.exports = burgers;
