var iAteYourStack = require('./iAteYourStack');
var hereIsYourStack = require('./hereIsYourStack');
var moreStack = require('./moreStack');

iAteYourStack(function(err) {
	console.log('A stacktrace of limited usefulness ----------------\n', err.stack);

	hereIsYourStack(function(err) {
		console.log('\nA useful stacktrace -----------------\n', err.stack);

		moreStack(function(err) {
			console.log('\nA useful stacktrace -----------------\n', err.stack);
		});
	});
});
