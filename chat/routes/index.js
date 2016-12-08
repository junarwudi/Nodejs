var express = require('express'),
    msg = require('../controller/controller.js'),
    router = express.Router();



    console.log(msg)

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
      title: '通讯APP',
      msg: "sss"
  });
});

//socket部分

/*
io.on('connection', function(socket) {
    //接收并处理客户端发送的foo事件
    socket.on('foo', function(data) {
        //将消息输出到控制台
        console.log(data);
    })
});
*/


module.exports = router;
