module.exports = {
    list : function(req, res, callback) {
        model.pool.getConnection(function(err, connection) {
            //定义查询语句
            var sql = "SELECT * FROM `user`";
            connection.query(sql, function(err, result) {
                result = JSON.stringify(result);
                callback(err, result);
                // 释放连接
                connection.release();
            })
        });
    }
}
