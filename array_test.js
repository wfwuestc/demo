function arr_test() {
  console.time('push');
  const arrA = [];
  for (var i =0;i<10000000;i++){
    arrA.push(i);
  }
  console.timeEnd('push');
  console.time('new array');
  const arrB = new Array(10000000);
  for (var j =0;j<10000000;j++){
    arrB[j] = j;
  }
  console.timeEnd('new array');
  console.time('generate ten million array []')
  for (var i =0;i<10000000;i++){
    var c = []
  }
  console.timeEnd('generate ten million array []')
  console.time('generate ten million array new Array')
  for (var i =0;i<10000000;i++){
    var d = new Array()
  }
  console.timeEnd('generate ten million array new Array')
}
arr_test()