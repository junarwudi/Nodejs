$('#textEdit').click(function () {
    textEdit.scrollTop=textEdit.scrollHeight;
});
$('#textEdit').keyup(function(event){
    var msg = $('#textEdit').html();
    if(msg!=""||msg!=null){
        $('.cont-img img:nth-child(1)').addClass('hide')
        $('.cont-img span').removeClass('hide')
    }
    if(msg==""||msg==0) {
        $('.cont-img img:nth-child(1)').removeClass('hide')
        $('.cont-img span').addClass('hide')
    }
});



/*链接服务器*/
var socket=io.connect(),//与服务器进行连接
    button=$('#send');
button.click(function(){
    var info = $('#textEdit').html();
    socket.emit('foo', info);
});
