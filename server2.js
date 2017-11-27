import express from 'express';


var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/',function(req,res){
	res.sendFile('./index.html', {root:__dirname});

});
app.use(express.static(__dirname));
app.listen(app.get('port'));