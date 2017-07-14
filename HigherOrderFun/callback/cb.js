/**
 * Callback function
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T08:52:13+0800
 * @param  {string}                 url 输入的请求
 * @param  {Function}               cb  输入的毁掉函数
 * @return {string}                     返回数据
 */
  var getData = function (url, cb) {
    $.get(url, function (data) {
      cb(data);
    });
  }