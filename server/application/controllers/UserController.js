var userModel = model.load('User');
module.exports = {
    // post请求地址
    post_login : function(req, res){
        var post = req.body; // 获取post值
        request.post('http://api.ruixinglong.net/token', 
            function (error, response, body) {
                // 返回json数据
                res.json(JSON.parse(body));
            }).form({"grant_type":client.grant_type, "username":post.username, "password":post.password, "client_id":client.client_id, "scope":client.scope}).auth(client.client_id, client.client_secret, true);
    },
}    
