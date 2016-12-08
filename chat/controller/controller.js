var io = require('socket.io');

var msg = function(server){
    this.socket = io.listen(server);
}
msg.prototype= {
    socketMsg:function () {
        var cc = new msg(server)
        cc.on('connection', function(socket) {
            //接收并处理客户端发送的foo事件
            socket.on('foo', function(data) {
                //将消息输出到控制台

                console.log(data);
            })
        });
    }
}




module.exports = msg;
