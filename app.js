require('./iAteYourStack')(function(err) {
	console.log('A stacktrace of limited usefulness ----------------\n', err.stack);

	require('./hereIsYourStack')(function(err) {
		console.log('\nA useful stacktrace -----------------\n', err.stack);

		require('./moreStack')(function(err) {
			console.log('\nA useful stacktrace -----------------\n', err.stack);
		});
	});
});
