
const params = new URLSearchParams(window.location.search);
let urlInfo = params.get("url");
let fileName = params.get("name");

/**
 * 下载文件函数
 * @param {string} fileName - 要下载的文件名
 * @param {Blob} blob - 文件内容的Blob对象
 */
const download = (fileName, blob) => {
    // 创建一个a元素用于下载
    const link = document.createElement("a");
    // 将Blob对象转换为URL并设置为a元素的href属性
    link.href = URL.createObjectURL(blob);
    // 设置下载的文件名
    link.download = fileName;
    // 触发点击事件开始下载
    link.click();
    // 下载完成后移除a元素
    link.remove();
    // 释放之前创建的URL对象
    URL.revokeObjectURL(link.href);
};

const myRequest = new Request(urlInfo);
fetch(myRequest).then(function(response) {
    return response.blob();
}).then(function(myBlobdata) {
	download(fileName, myBlobdata);
});