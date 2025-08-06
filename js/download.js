import {getSuffix} from './program_language';
export function downloadCode(codeElement, langClass) {
    const codeContent = codeElement;

    const {fileName, fileType, fileExt} = getSuffix(langClass);

    const blob = new Blob([codeContent], { type: fileType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
}
