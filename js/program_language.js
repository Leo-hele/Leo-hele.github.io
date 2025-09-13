export function getSuffix(langClass) {
    const extMap = {
        'python': 'py',
        'javascript': 'js',
        'c': 'c',
        'cpp': 'cpp',
        'java': 'java',
        'bash': 'sh',
        'typescript': 'ts',
        'py': 'py', // 新增短名称映射
        'js': 'js',
        'html': 'html',
        'css': 'css',
        'txt': 'txt',
        'shell': 'sh',
        'text': 'txt',
        'json': 'json',
        'xml': 'xml',
        'yaml': 'yaml',
        'markdown': 'md',
        'md': 'md',
        'sql': 'sql',
        'ruby': 'rb',
        'php': 'php',
        'go': 'go',
        'perl': 'pl',
        'rust': 'rs',
        'kotlin': 'kt',
        'swift': 'swift',
        'dart': 'dart',
        'lua': 'lua',
        'sh': 'sh',
        'powershell': 'ps1',
        'haskell': 'hs',
        'r': 'r',
        'scala': 'scala',
        'vb': 'vb',
        'bat': 'bat',
        'ps1': 'ps1',
    };
    // 修改类名解析逻辑
    const lang = langClass ?
        langClass.replace('language-', '')
            .replace(/^html$/, 'markup')  // 转换html到markup
            .toLowerCase()
        : 'txt';
    const fileExt = extMap[lang] || lang;  // 优先使用映射表

    // 设置MIME类型映射
    const mimeTypes = {
        js: 'application/javascript',
        py: 'text/x-python',
        html: 'text/html',
        css: 'text/css',
        txt: 'text/plain',
        sh: 'text/x-shellscript',
        ts: 'text/typescript',
        c: 'text/x-c',
        cpp: 'text/x-c++',
        java: 'text/x-java-source'
    };

    const fileName = `code.${fileExt}`;
    const fileType = mimeTypes[fileExt] || 'text/plain';
    return {fileName, fileType, fileExt};
}
