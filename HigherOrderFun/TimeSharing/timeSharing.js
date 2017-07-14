//  arr: 源数据
//  process: 处理函数
//  count: 每次抽取个数

/**
 * Time-sharing
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T10:04:44+0800
 * @description 创建一个队列，使用定时器取出下一批要处理的项目进行处理，接着在设置另一个定时器。
 */
var chunk = function(arr, process, count) {
    setTimeout(function() {
        for (var i = 0; i < Math.min(count, arr.length); i++) {
            process(arr.shift());
        }
        if (arr.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
};
