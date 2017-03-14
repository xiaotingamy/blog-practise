var userModel = model.load('User');
module.exports = {
    // post请求地址
    post_login : function(req, res){
        var post = req.body;
        request.post({
                url: 'http://blog.ruixinglong.net/api/v1/auth/token',
                form: {
                    "grant_type":client.grant_type, 
                    "username":post.username, 
                    "password":post.password, 
                    "client_id":client.client_id, 
                    "scope":client.scope
                }
            },
            function(err,httpResponse,body){
                res.json(JSON.parse(body));
            }
        ).auth(client.client_id, client.client_secret, true);
    }
}