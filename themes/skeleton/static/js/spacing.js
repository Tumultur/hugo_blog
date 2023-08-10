document.addEventListener('DOMContentLoaded', function () {
    var textNodes = document.querySelectorAll('p');
    textNodes.forEach(function (node) {
    node.innerHTML = node.innerHTML.replace(/([\u4e00-\u9fa5]) ([^\u4e00-\u9fa5])/g, '$1\u2006$2').replace(/([^\u4e00-\u9fa5]) ([\u4e00-\u9fa5])/g, '$1\u2006$2').replace(/([。；，：、“”‘’「」『』（）《》〈〉 ])([。；，：、“”‘’「」『』（）《》〈〉 ])([。；，：、“”‘’「」『』（）《》〈〉 ])/g, '$1<mojikumi></mojikumi>$2<mojikumi></mojikumi>$3').replace(/([。；，：、“”‘’「」『』（）《》〈〉 ])([。；，：、“”‘’「」『』（）《》〈〉 ])/g, '$1<mojikumi></mojikumi>$2').replace(/·/g, '<interpunct>·</interpunct>');
    });
});
document.addEventListener('copy', function (e) {
    const text = window.getSelection().toString().replace(/\u2006/g, '');
    e.clipboardData.setData('text/plain', text);
    e.preventDefault();
});