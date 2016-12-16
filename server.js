var c = require('connect');
var ss = require('serve-static');
var port = process.env.PORT || 8080;
c().use(ss('./dist')).listen(port,function(){
	console.log('Serving on port ' + port + '...');
});