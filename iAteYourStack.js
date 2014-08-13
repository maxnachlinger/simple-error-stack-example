var moduleThatErrors = require('./moduleThatErrors');

module.exports = function(cb) {
	moduleThatErrors(function(err) {
		if(err) return cb(err);
		cb(null, {name: 'Test Thing'});
	});
};
