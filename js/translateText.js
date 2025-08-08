async function InitTranslate() {
    const baseLang = "translate.js";
    const {LangTo, LangFrom} = await loadJson("../lang.json");

    function translateLang(lang, fromLang, toLang) {
        console.log(lang);
        console.log(fromLang);
        console.log(toLang);
        if (fromLang === toLang){
            return lang;
        }
        if (toLang === baseLang) {
            return LangTo[fromLang][lang];
        } else if (fromLang === baseLang) {
            return LangFrom[toLang][lang];
        } else {
            return translateLang(translateLang(lang, fromLang, baseLang), baseLang, toLang);
        }
    }

    function translateText(text, toLang) {
        console.log(text);
        console.log(toLang);
        return fetch("http://localhost:4001/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: "auto",
                target: toLang,
                format: "text",
                alternatives: 3,
                api_key: ""
            }),
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const tmp = res.json();
            console.log(tmp);
            return tmp;
        });
    }

    window.translateLang = translateLang;
    window.translateText = translateText;
}

let initedTranslate = false;
InitTranslate().then(() => {
    initedTranslate = true;
});
window.initedTranslate = initedTranslate;
