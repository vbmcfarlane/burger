// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
	connection - mysql.createConnection(process.env.JAWSDB_URL);
}else{
	connection = mysql.createConnection({
		host: 'ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'qmuhf79ni2feselj',
		password: 'l64v55ganb8vtiku'
		database: 'yvi6agkj0r2emub1'
	});
};
connection.connect();
module.exports = connection;