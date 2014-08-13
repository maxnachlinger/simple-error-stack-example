var util = require('util');
var iAteYourStack = require('./iAteYourStack');
var hereIsYourStack = require('./hereIsYourStack');

iAteYourStack(function(err) {
	console.log('A stacktrace of limited usefulness ----------------\n', err.stack);

	hereIsYourStack(function(err) {
		console.log('\nA useful stacktrace -----------------\n', err.stack);
	});
});
