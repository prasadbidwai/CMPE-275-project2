/**
 * Module dependencies.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
    //password : '',
  password : 'password123',
	port : '3306',
	database : 'project2'
});
connection.connect();

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

//get methods to get resources:
app.get('/users',routes.getUserInfo);
app.get('/users/:userId', routes.getSpecUserInfo);
app.get('/category', routes.getAllCats);
app.get('/category/:categoryId', routes.getSpecCats);
app.get('/category/:categoryId/product/', routes.getSpecCatProducts);


//post methods to create resources: 
app.post('/users', routes.addUserInfo)
app.post('/category', routes.addCategory);
app.post('/category/:categoryId/product', routes.addProduct);


/*
app.get('/getBubble/:stateName/:companyName',routes.getBubble);
app.get('/showBubble/:stateName/:companyName',routes.showBubble);


app.get('/showtest', function(req, res) {
	res.render('test.ejs');
});


app.get('/showmaps', function(req, res) {
	connection.query('select sum(jobCount) as jobCount, stateName from citywisejobcount group by stateName order by stateName asc', function(err, rows,fields) {
		console.log(rows[38].jobCount);
		res.render('Map.ejs', {
			rows:rows		
	});
});
});

*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
