chrome.contextMenus.create({
    'type':'normal',
    'title':'用"%s"捅一下奶牛',
    'contexts':['selection'],
    'id':'cn',
    'onclick':search
});

function search(info, tab){
    var url = 'http://hometown.scau.edu.cn/course/index.php?s=/Search/result/'+info.selectionText ;
    window.open(url, '_blank');
}
