var express = require('express')
var app = express()
var server = require('http').Server(app)
// const jwt = require("jsonwebtoken");
// app.use(require("./jwtMiddleware")());
// const token = jwt.sign({ id: _id }, key, {
//     expiresIn: 60 * 60 * 24 * 7
// });



//  获取post请求数据
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use('/models', express.static(__dirname + '/models'));
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

server.listen(666, function(){
    console.log('服务器在666端口启动')
})