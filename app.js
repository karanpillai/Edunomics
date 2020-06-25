var express =require('express');
var app = express();
var {sqrt,pow} = require('mathjs');

app.get('/solution/:h/:e',function(req,res){
    var height = req.params.h;
    var e = req.params.e;
    var h=0
    var t=0
    var count = 0
    var coordinates =[];
    for(i=0;i<10;i++)
    {
        h = pow(e,2)*height;
        t = (sqrt(20*h))/5;
        var cp = {"h": h,"t": t}
        coordinates.push(cp);
        height = h;
    }
    res.json(coordinates);
})
app.listen(3000,function(){
	console.log("App has been started");
})