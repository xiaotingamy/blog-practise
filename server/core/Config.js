module.exports = {
    load : function(name){
    	return require(root + "/config/" + name);
    }
}
