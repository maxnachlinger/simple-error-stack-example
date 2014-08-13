var moduleThatErrors = require('./moduleThatErrors');
var VError = require('verror');

module.exports = function(cb) {
	moduleThatErrors(function(err) {
		if(err) return cb(new VError(err));
		cb(null, {name: 'Test Thing'});
	});
};
