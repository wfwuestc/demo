var listLength = 10
var list = []
var min = 0
var max = 10
for(var i = 0; i<listLength; i++) {
  var num = parseInt(Math.random()*(max-min+1)+min,10);
  list.push(num)
}
console.log('随机数列', list)

function Selection(list) {
  let minValue = 0
  for(let i = 0; i < list.length; i++){
    minValue = i
    for(let j = i; j < list.length; j++){
      if(list[j] < list[minValue]){
        minValue = j
      }
    }
    if(minValue !== i){
      swap(i,minValue,list)
    }
  }
  console.log(list)
}
function swap(front, behind, list) {
  let tmp = list[front]
  list[front] = list[behind]
  list[behind] = tmp
}
Selection(list)