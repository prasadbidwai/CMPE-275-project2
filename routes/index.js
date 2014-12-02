
/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
};

//Get Methods: 

exports.getUserInfo= function(req,res){
	dbConn.getUserInfo(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.getSpecUserInfo= function(req, res){
	dbConn.getSpecUserInfo(function(err,rows){
		console.log(rows);
		console.log(req.params.userId);
		 res.send(rows);
	},req.params.userId);	
};

exports.getAllCats= function(req,res){
	dbConn.getAllCats(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.getSpecCats= function(req, res){
	dbConn.getSpecCats(function(err,rows){
		console.log(rows);
		console.log(req.params.categoryId);
		 res.send(rows);
	},req.params.categoryId);	
};

exports.getSpecCatProducts= function(req, res){
	dbConn.getSpecCatProducts(function(err,rows){
		console.log(rows);
		console.log(req.params.categoryId);
		 res.send(rows);
	},req.params.categoryId);	
};

//Post Methods: 

exports.addUserInfo = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	//req.getConnection(function (err, connection) {
	//console.log(req.body);
	var data = {
	          firstName    : req.body.firstName,
	          lastName: req.body.lastName,
	          emailId   :req.body.emailId,
	          mobile   :req.body.mobile
	        };
	//console.log(data);
	dbConn.addUserInfo(function(err,rows){
		console.log(rows);
		res.send(rows);
	},data);
//});
	};
	
	exports.addCategory= function(req,res){
		var input = JSON.parse(JSON.stringify(req.body));
		//req.getConnection(function (err, connection) {
		//console.log(req.body);
		var data = {
		          categoryName:req.body.categoryName
		        };
		//console.log(data);
		dbConn.addCategory(function(err,rows){
			console.log(rows);
			res.send(rows);
		},data);
	//});
		};
		
		exports.addProduct= function(req,res){
			var input = JSON.parse(JSON.stringify(req.body));
			//req.getConnection(function (err, connection) {
			//console.log(req.body);
			var data = {
					
					productName:	req.body.productName,
					quantity:	req.body.quantity,
					userId:	req.body.userId,
					expectedOffer:	req.body.expectedOffer,
					productDesc:	req.body.Desc,
					productExpiryDate:	req.body.productExpiryDate,
					isValid:	req.body.isValid,
					categoryId:	req.body.categoryId,
					lastUpdated:	req.body.lastUpdated
			        
			        };
			//console.log(data);
			dbConn.addProduct(function(err,rows){
				console.log(rows);
				res.send(rows);
			},data,req.params.categoryId);
		//});
			};
		
		
		
		
		
    


exports.getSalaryInfo= function(req, res){
	dbConn.getSalaryInfo(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

	
exports.showRatingAnalysis = function(req, res){
		  res.render('ratingAnalysis');
	
};
exports.getBarChartCali = function(req, res){
	  res.render('companyBarChart');

};
exports.getBarChartTexas = function(req, res){
	  res.render('BarChartTexas');

};
exports.getBarChartNewYork = function(req, res){
	  res.render('BarChartNY');

};
exports.getBarChartWashington = function(req, res){
	  res.render('BarChartWashington');

};
exports.getBarChartVirginia = function(req, res){
	  res.render('BarChartVirginia');

};


exports.showSalaryAnalysis= function(req, res){
	  res.render('salaryAnalysis');

};

exports.showMap= function(req, res){
	res.render('Map',{rows:''});

};

exports.showhome= function(req, res){
	res.render('index');
	};


exports.getCompanyRatings = function(req, res){
	dbConn.getCompanyRatings(function(err,rows){
		console.log(rows);
		 res.send(rows);
	});	
	  
};




exports.getMapData= function(req, res){
	console.log("routes");
	dbConn.getMapData(function(err,rows){
		 res.send(rows);
	});	
};




exports.getCompanyReviews = function(req,res){
	dbConn.getCompanyReviews(function(err,rows){
		console.log(rows);
		res.send(rows);
	})
};

exports.showCompanyReviews = function(req,res){
	res.render('companyReviews');
};

exports.showBubble= function(req, res){
	var stateName = req.params.stateName;
	//console.log("__________"+stateName+"param="+req.params.companyName);
	var companyName = req.params.companyName;
	console.log("__________"+stateName+"_______"+companyName);
	res.render('bubbleChart',{stateName:stateName,companyName:companyName});
	};

exports.getJobcountData = function(req,res){
	var stateName = req.params.stateName;
	console.log("__________***************_____________"+stateName);
	dbConn.getJobCountByState(function(err,rows){
		console.log(rows);
		res.send(rows);
	},stateName);
}

exports.showTreeMap = function(req,res){
	console.log("State Name_________"+req.params.stateName);
	res.render('companyTreeMap',{dat:req.params.stateName});
}
exports.getBubble= function(req, res){
	console.log("side getBubble");
	var stateName = req.params.stateName;
	var companyName = req.params.companyName;
	dbConn.getBubble(function(err,rows){
		console.log("Inside getBubble");
		console.log(rows);
				 res.send(rows);
	},stateName,companyName);	
};

