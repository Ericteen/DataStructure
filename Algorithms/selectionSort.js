/**
 * 选择排序
 * 
 * @param {Array} arr 输入的数组
 * @returns {Array}
 */
function selectionSort(arr) {
  var len = arr.length
  var minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for(let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}