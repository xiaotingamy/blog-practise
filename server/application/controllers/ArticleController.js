module.exports = {
	post_list : function(req, res){
		request.get('http://blog.ruixinglong.net/api/v1/article/list', {
			headers: {
			    'Authorization': 'MyCovKjMtakl1rYrV4VEiPZ04rW2R2debLtq9pDR'
			}
		},
		function(err,httpResponse,body){
            // 返回json数据
            res.json(JSON.parse(body));
            console.log(body)
        })
}
}