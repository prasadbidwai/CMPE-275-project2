
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	//password : '',
	password : 'password123',
	port : '3306',
	database : 'project2'
});

exports.getUserInfo = function(callback){
	var query = 'select * from project2.user;'
	
	connection.query(query, function(err, rows) {
			
			callback(err, rows);
	});
			
}

exports.getSpecUserInfo = function(callback,q) {
	var query = "select * from project2.user where userId='"+ q +"'";
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};

exports.getAllCats = function(callback){
	var query = 'select * from project2.category;'
	
	connection.query(query, function(err, rows) {
			
			callback(err, rows);
	});
			
}

exports.getSpecCats = function(callback,q) {
	var query = "select * from project2.category where categoryId='"+ q +"'";
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};

exports.getSpecCatProducts = function(callback,q) {
	var query = "select * from project2.product where categoryId='"+ q +"'";
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};



//post methods as follows:

//API to Create an user:
exports.addUserInfo= function(callback,data){
	console.log("my data"+data);
	var query= "insert into project2.user(firstName, lastName, emailId, mobile)values('"+ 
data.firstName +"','"+ data.lastName+"','"+data.emailId+"','"+
			data.mobile+"')";
	console.log("about to call database");
	console.log(query);
//console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		console.log(err);
		callback(err, rows);
	});
};


//API to create a category: 
exports.addCategory= function(callback,data){
	console.log("my data"+data);
	var query= "insert into project2.category(categoryName)values('"+ 
			data.categoryName+"')";
	console.log("about to call database");
	console.log(query);
//console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		console.log(err);
		callback(err, rows);
	});
};


exports.addProduct= function(callback,data,q){
	console.log("my data"+data);
var query= "insert ignore into project2.product(productName, quantity, userId, expectedOffer, productDesc," +
"productExpiryDate, isValid, categoryId)values('"+ 
data.productName +"','"+ data.quantity+"','"+data.userId+"','"+data.expectedOffer+"','"
+data.productDesc+"','"+data.productExpiryDate+"','"+data.isValid+"','"+q+"')";
	console.log("about to call database");
	console.log(query);
console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		console.log(err);
		callback(err, rows);
	});
};


/*
exports.getSalaryInfo = function(callback,q) {
	if (q==="frontEnd or UI Developer") {q="frontEnd / UI Developer";}
	var query = "select jobTitle, medianSalary from cmpe274.salinfo where jobName='"+q+"' limit 10";
	console.log("about to call database");
	console.log("value of q is "+q);
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};


exports.getCompanyReviews = function(callback){
	var query = 'select companyName as name,ratingDesc,overallRating as size from companysenti order by ratingDesc;'
	
	connection.query(query, function(err, rows) {
			
			callback(err, rows);
	});
			
}

exports.getCompanyRatings = function(callback) {
	var query = "select companyName as name, companyGroup as 'group',overallRating as 'Overall Rating',cultRatng as 'Culture And Values Rating',compsRating as 'Compensation And Benefits Rating',currRatng as 'Career Opportunities Rating',wrkLyfRatng as 'WorkLife Balance Rating' from companysenti ";
	connection.query(query, function(err, rows) {
		console.log(rows);
		callback(err, rows);
	});
}


exports.getMapData = function(callback) {
	var query = "select sum(jobCount) as jobCount, stateName from citywisejobcount group by stateName order by stateName asc";
	connection.query(query, function(err, rows) {
		callback(err, rows);
	});
};
exports.getBubble = function(callback,stateName,companyName) {
	console.log("StateName______"+stateName);
	console.log("CompanyName________"+companyName);
	var query = "select  cityName as name, jobCount as size from emplyjobcount where stateName='"+stateName+"' and companyName='"+companyName+"' order by companyName";
	connection.query(query, function(err, rows) {
		console.log(rows);
		callback(err, rows);
	});
};

exports.getJobCountByState = function(callback,stateName){
	console.log("StateName_________"+stateName)
	var query = "select companyName as name,sum(jobCount) as size from emplyjobcount where stateName='"+stateName+"' group by companyName ";
	connection.query(query, function(err, rows) {
		console.log(rows);
		callback(err, rows);
	});
}
*/
