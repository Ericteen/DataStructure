
/**
 * LazyLoad
 * @Author Cheng_Guanghui
 * @description 日常编程中要注意缓存那些经常使用、改变较少或不做改变的内容
 */
var gotop = (function() {
    var isFF = /firefox/i.test(navigator.userAgent);
    var docEl = document[isFF ? 'documentElement' : 'body'];
    return function() {
        docEl.scrollTop = 0;
    };
})();
