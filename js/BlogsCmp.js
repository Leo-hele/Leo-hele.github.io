const time = new Date().getTime();
function KeyName(blog) {
    let tmp = 0;
    const maxChar = 1000000;
    for (const i of blog.title.toLowerCase()){
        tmp += (maxChar - i.charCodeAt(0)) * maxChar;
    }
    return tmp / Math.pow(maxChar, blog.title.length);
}
function KeyClass(blog) {
    let tmp = 0;
    const maxChar = 1000000;
    for (const i of blog.class.toLowerCase()){
        tmp += (maxChar - i.charCodeAt(0)) * maxChar;
    }
    return tmp / Math.pow(maxChar, blog.class.length);
}
function KeyDate(blog) {
    const date = new Date(blog.date);
    return date.getTime() / time; // Normalize to a smaller range
}
function Jaccard(a, b) {
    const setA = new Set(a.split(/\s+/).map(word => word.toLowerCase()));
    const setB = new Set(b.split(/\s+/).map(word => word.toLowerCase()));
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    const union = new Set([...setA, ...setB]);
    return intersection.size / union.size;
}
function Dice(a, b) {
    const setA = new Set(a.split(/\s+/).map(word => word.toLowerCase()));
    const setB = new Set(b.split(/\s+/).map(word => word.toLowerCase()));
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    return (2 * intersection.size) / (setA.size + setB.size);
}
function Levenshtein(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    return dp[m][n] / m;
}
function Hamming(a, b) {
    let distance = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            distance++;
        }
    }
    return distance / a.length;
}
function CosineSimilarity(a, b) {
    const vectorA = a.split(/\s+/).map(word => word.toLowerCase());
    const vectorB = b.split(/\s+/).map(word => word.toLowerCase());
    const setA = new Set(vectorA);
    const setB = new Set(vectorB);
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    return intersection.size / Math.sqrt(setA.size * setB.size);
}
function KeyCorrelation(Similarity) {
    return (blog) => {
        const searchInput = document.getElementById("search-input").value.toLowerCase();
        return 1 - Similarity(blog.title, searchInput);
    };
}
function KeyHot(blog) {
    return blog.hot;
}
function KeyAll(blog) {
    return KeyName(blog) * 0 + KeyClass(blog) * 0 + KeyDate(blog) * 1 + KeyCorrelation(Levenshtein)(blog) * 7 + KeyHot(blog) * 4;
}
function CmpLess(a, b){return a - b;}
function CmpGreater(a, b){return b - a;}
let Keys = [KeyAll, KeyName, KeyClass, KeyDate, KeyHot];
let KeyNames = ["智能排序（0×标题+0×分类+1×日期+7×相关性 Levenshtein+4×热度）", "标题", "分类", "日期", "热度"];
let Cmps = [CmpGreater, CmpLess];
let CmpNames = ["降序", "升序"];
let SimilarityNames = ["Jaccard", "Dice", "Levenshtein", "Hamming", "Cosine"];
let Similarities = [Jaccard, Dice, Levenshtein, Hamming, CosineSimilarity];

for (let i in Similarities){
    Keys.push(KeyCorrelation(Similarities[i]));
    KeyNames.push("相关性 " + SimilarityNames[i]);
}
