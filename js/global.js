// const baseUrl = "/bxpw";
// 移动端响应式设置HTML字体大小
initScreen();
window.onresize = function () {
    initScreen();
}
function defaultfont() {
    var sw = document.documentElement.clientWidth;
    console.log("sw",sw);
    var pw = 1440;
//  sw = sw > 750 ? 750 : sw < 320 ? 320 : sw;
    var f = 100 * sw / pw;
    document.documentElement.style.fontSize = f + 'px';
}
function initScreen() {
    defaultfont();
    setTimeout(function () {
        defaultfont();
    }, 100);
}

