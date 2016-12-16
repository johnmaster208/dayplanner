var c = require('connect');
var ss = require('serve-static');
c().use(ss('./dist')).listen(5000,function(){
	console.log('Serving on port 5000...');
});