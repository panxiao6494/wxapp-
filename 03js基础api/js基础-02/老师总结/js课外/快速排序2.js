var tmpArr = [];
for(var i =0;i<10000;i++){
  tmpArr.push(Math.floor(Math.random()*10001)) //随机生成0-1000的随机数
}

function quickSort(arr, left, right) {
  var len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }        
  }
  swap(arr, pivot, index - 1);
  return index-1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort(tmpArr));