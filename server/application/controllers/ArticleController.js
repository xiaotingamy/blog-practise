var qs = require('qs');

module.exports = {
	get_list : function(req, res){
		request.get({
			url: 'http://blog.ruixinglong.net/api/v1/article/list',
			headers: {
			    'Authorization': "Bearer " + "MTrvyUMci_tFwNKE6O--Dx1WfzQGIFE12WTtPUDL"
			}
		},
		function(err,httpResponse,body){
            res.json(JSON.parse(body));
            console.log(body);
        })
	}
	get_info : function(req, res) {
		request.get({
			url: 'http://blog.ruixinglong.net/api/v1/article/info',
			headers: {
			    'Authorization': "Bearer " + "MTrvyUMci_tFwNKE6O--Dx1WfzQGIFE12WTtPUDL"
			}
		},function(err,httpResponse,body){
			res.json(JSON.parse(body));
            console.log(body);
		})
	}
}