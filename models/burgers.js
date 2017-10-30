var orm = require('../config/orm.js');

var burgers = {
	all: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},
	create: function(col, vals, callback){
		orm.create('burgers', col, vals, function(res){
			callback(res);
		});
	},
	update: function(objColVals, condition, callback){
		orm.update('burgers', objColVals, condition, function(res){
			callback(res);
		});
	}
};

module.exports = burgers;