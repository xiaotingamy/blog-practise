var qs = require('qs');

module.exports = {
	get_list : function(req, res){
		console.log(session.token);
		request.get('http://blog.ruixinglong.net/api/v1/article/list',{
			headers: {
			    'Authorization': "Bearer " + session.token
			}
		},
		function(error, response, body){
            res.json(JSON.parse(body));
            console.log(body);
        })
	}
}