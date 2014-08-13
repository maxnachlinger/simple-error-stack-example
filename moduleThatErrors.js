var path = require('path');

module.exports = function(cb) {
	setTimeout(function() {
		cb(new Error(path.basename(__filename) + ' Error!'));
	}, 100);
};
