const {TranslationServiceClient} = require('@google-cloud/translate');

const translationClient = new TranslationServiceClient();
const projectResName = 'projects/hanzhenyi-test';

async function translateText(srcLang, tarLang, text) {
	const request = {
		parent: projectResName,
		contents: [text],
		mimeType: 'text/plain',
		sourceLanguageCode: srcLang,
		targetLanguageCode: tarLang,
	};
	try {
		const [resp, err] = await translationClient.translateText(request);
		return resp.translations[0].translatedText;
	}
	catch (err) {
		return err.message;
	}
}

module.exports = {
	translateText
}