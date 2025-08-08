function translateText(text, toLang){
    return fetch("http://localhost:4001/translate", {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: "auto",
            target: toLang,
            format: "text",
            alternatives: 3,
            api_key: ""
        })
    }).then(res => res.json())
}