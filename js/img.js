function setAllImages() {
    document.querySelectorAll("img").forEach(img => {
        img.src = (img.src.startsWith("http") ? img.src : "https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/{{ site.permalink }}_" + img.src);
    })
}
function setAllFiles() {
    document.querySelectorAll("a").forEach(a => {
        a.href = (a.href.startsWith("http") ? a.href : "https://gitee.com/Leo-hele/leo-hele.github.io-files/raw/main/{{ site.permalink }}_" + a.href);
    })
}
setAllFiles();
setAllImages();
