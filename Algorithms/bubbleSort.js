/**
 * 冒泡排序
 * 
 * @param {Array} arr 输入的数组
 * @returns {Array}
 */
function bubbleSort(arr) {
  var len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}