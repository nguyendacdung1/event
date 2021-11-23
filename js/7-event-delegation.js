function getTarget(e){
    if (!e){
        e=window.event;
    }
    return  e.target || e.srcElement;
}
function itemDone(e) {
    if (target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;
        elList = elListItem.parentNodel
        elList.removeChild(elListItem);
    }
    if (target.nodeName.toLowerCase() == "em") {
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (e.parentDefault) {
        e.parentDefault();
    } else {
        e.returnValue = false;
    }
}
var el=document.getElementById('shoppingList');
if (el.addEventListener){
    el.addEventListener('click',function (e){
        itemDone(e);
    },false);
}else {
    el,attachEvent('onclick',function (e){
        itemDone(e);
    });
}
