require('./iAteYourStack')(printError.bind(printError, 'iAteYourStack'));

require('./hereIsYourStack')(printError.bind(printError, 'hereIsYourStack'));

require('./moreStack')(printError.bind(printError, 'moreStack'));

function printError(msg, err) {
	console.log('\n' + msg + '\n', err.stack);
}
