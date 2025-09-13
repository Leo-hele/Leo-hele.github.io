import {getSuffix} from "./program_language";

function addPush(json) {
    return loadJson(json).then((data) => {
        return fetch("https://api.github.com/repos/Leo-hele/Leo-hele.github.io/contents/_posts", {
            method: "POST",
            headers: {
                "Authorization": data.token_add,
                "Content-Type": "application/json",
            },
            body: json
        }).then((res) => {
            if (! res.ok){
                throw new Error("Add blog failed");
            }
            return res.json();
        });
    });
}

function addBlog(title, content, author, date, permalink, class_name) {
    let blog = {
        title: title,
        author: author,
        date: date,
        permalink: permalink,
        class_name: class_name,
        layout: "page",
    };
    let frontMatter = `---\n`;
    for (const key in blog) {
        frontMatter += `\n${key}: ${blog[key]}\n`;
    }
    frontMatter += `---\n\n`;
    if (content.search(/^---[\s\S]*---/g)) {
        content = content.replace(/^---[\s\S]*?---/g, frontMatter);
    } else {
        content = frontMatter + content;
    }
    console.log(content);
    return addPush(JSON.stringify({
        "path": `_posts/${date}-${permalink}.md`,
        "message": "Add new blog",
        "content": content,
    }));
}
export function addProgram(title, content, author, date, permalink, class_name, language) {
    let program = {
        title: title,
        author: author,
        date: date,
        permalink: permalink,
        class_name: class_name,
        layout: "page",
        language: language,
    };
    let frontMatter = `---\n`;
    for (const key in program) {
        frontMatter += `\n${key}: ${program[key]}\n`;
    }
    frontMatter += `---\n\n`;
    if (content.search(/^---[\s\S]*---/g)) {
        content = content.replace(/^---[\s\S]*?---/g, frontMatter);
    } else {
        content = frontMatter + content;
    }
    console.log(content);
    return addPush(JSON.stringify({
        "path": `_posts/${date}-${permalink}.${getSuffix(language)[2]}`,
        "message": "Add new program",
        "content": content,
    }));
}
