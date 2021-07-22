const {TranslationServiceClient} = require('@google-cloud/translate');

const translationClient = new TranslationServiceClient();
const projectId = 'hanzhenyi2';

export async function translateText(srcLang, tarLang, text) {
	const request = {
		parent: `projects/{}`,
		contents: [text],
		mimeType: 'text/plain',
		sourceLanguageCode: srcLang,
		targetLanguageCode: tarLang,
	};
	const [resp] = await translationClient.translateText(request);
	return resp.translations[0].translateText;
}