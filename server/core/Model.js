var mysql = require('mysql');
var dbconfig = config.load("database");

var modelPath = "../application/models/";
module.exports = {
    //使用连接池
    pool : mysql.createPool(dbconfig.mysql),
    load : function(name){
    	return require(modelPath + name + "Model");
    }
}
