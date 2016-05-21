var tabList = document.getElementById("slideList");
var tabBox = document.getElementById("slideBox");
var oLis = tabList.getElementsByTagName("li");
var num = 0;
for (var i = 0; i < oLis.length; i++) {
    oLis[i].index = i;
    oLis[i].onmouseover = function () {
        changeBg(this.index);
    };
}
var t;
function changeBg(nIndex) {
    clearTimeout(t);
    if (nIndex >= oLis.length) {
        nIndex = 0;
    }
    num = nIndex;
    for (var j = 0; j < oLis.length; j++) {
        oLis[j].className = "";
    }
    oLis[nIndex].className = "select";
    tabBox.style.backgroundImage = "url(images/" + oLis[nIndex].index + ".jpg)";
    t = setTimeout('changeBg(num+1)', 5000);
}
changeBg(0);