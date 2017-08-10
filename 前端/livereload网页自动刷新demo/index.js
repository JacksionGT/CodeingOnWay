var connect  = require('connect');
var static = require('serve-static');

var start = function(){
    var server = connect(); 
    server.use(  static(__dirname)); 
    //server.use(  static(__dirname + '/public')); 
    server.listen(3000);

    var livereload = require('livereload');
    var lrserver = livereload.createServer();
    lrserver.watch(__dirname);//__dirname + "/public"
    console.log("监听已经启动，访问：http://localhost:3000");    
}
start();

var c = require('child_process');
c.exec('start http://localhost:3000');




