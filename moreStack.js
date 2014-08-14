var hereIsYourStack = require('./hereIsYourStack');
var VError = require('verror');

module.exports = function(cb) {
	hereIsYourStack(function(err) {
		if(err) return cb(new VError(err, "moreStack errored calling hereIsYourStack"));
		cb(null, {name: 'Test Thing'});
	});
};
