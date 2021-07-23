const {TranslationServiceClient} = require('@google-cloud/translate');

const translationClient = new TranslationServiceClient();


async function translateText(srcLang, tarLang, text) {
	const request = {
		parent: "projects/" + getProjectId(),
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

function getProjectId() {
	let projectId = process.env.PROJECT_ID;
	if (projectId == undefined) {
		projectId = "hanzhenyi-test";
	}
	return projectId;
}

module.exports = {
	translateText
}