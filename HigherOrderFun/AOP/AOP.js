/**
 * 测试一个函数的执行效率
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T09:02:33+0800
 * @return {number}
 */
var service = function () {
  console.log('功能逻辑...');
};

var test = (function () {
  var time_start;
  return {
    before: function () {
      time_start = (+ new Date());
      console.log('计时开始...');
    },

    after: function () {
      var end = (+ new Date()) - start_time;
      console.log('计时结束， 用时： ', end);
    }
  };
})();

var aop = function (fn, proxy) {
  proxy.before && proxy.before();
  fn();
  proxy.after && proxy.after();
};

aop(service, test);