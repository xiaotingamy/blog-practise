module.exports = {
    load : function(name){
    	return require(root + "/server/config/" + name);
    }
}
