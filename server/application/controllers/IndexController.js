module.exports = {
    // 视图demo
    get_index : function(req, res) {
        // request.get('http://api.ruixinglong.net/token');

        // post请求token，测试登陆用户名为test，密码为123,
        request.post('http://api.ruixinglong.net/token', 
        function (error, response, body) {
            console.log(response.statusCode); // 获取状态码，200为正常
            console.log(JSON.parse(body).access_token); // 获取access_token，本地保存，请求api
            if (!error && response.statusCode == 200) {
                console.log(body) // 返回值
            }
        }).form({"grant_type":client.grant_type, "username":"test", "password":"123", "client_id":client.client_id, "scope":client.scope}).auth(client.client_id, client.client_secret, true);
        console.log(123);

        res.render('index', {}); 
    },

    // get请求地址
    get_test : function(req, res){
        // 返回页面
        res.render('test'); 
    },

    // post请求地址
    post_test : function(req, res){
        var post = req.body; // 获取post值
        request.post('http://api.ruixinglong.net/token', 
            function (error, response, body) {
                // 返回json数据
                res.json(JSON.parse(body));
            }).form({"grant_type":client.grant_type, "username":post.username, "password":post.password, "client_id":client.client_id, "scope":client.scope}).auth(client.client_id, client.client_secret, true);
    },

    // get请求地址
    get_test1 : function(req, res){
        // 返回页面
        res.render('test1'); 
    }
}    
