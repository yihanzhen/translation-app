const assert = require('assert');
const translator = require('../src/translate');

describe('integration test', () => {
	it('translates', async function() {
		let resp = await translator.translateText('en-us', 'es-us', 'good');
		assert.equal(resp, 'bien');
	})

	it('handles error', async function() {
		let resp = await translator.translateText('not-lang', 'es-us', 'good');
		assert.equal(resp, '3 INVALID_ARGUMENT: Source language is invalid.' );
	})
})