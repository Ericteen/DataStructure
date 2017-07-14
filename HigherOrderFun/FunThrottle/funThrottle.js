/**
 * 函数节流
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T09:11:22+0800
 * @description 当页面滚动到底部时才会去触发请求
 */
var getData = (function () {
  var onAjax = flase;
  return function (cb) {
    if (!onAjax) {
      onAjax = true;
      $.get('/XXX', function (data) {
        cb(data);
        onAjax = false;
      });
    }
  };
})();

$(window).scroll(function () {
  if (滚动到底部) {
    getData(render);
  }
});