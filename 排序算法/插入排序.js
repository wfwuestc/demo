var listLength = 10
var list = []
var min = 0
var max = 10
for (var i = 0; i < listLength; i++) {
  var num = parseInt(Math.random() * (max - min + 1) + min, 10)
  list.push(num)
}
console.log('随机数列', list)

function swap(front, behind, list) {
  let tmp = list[front]
  list[front] = list[behind]
  list[behind] = tmp
}

function Insert(list) {
  for (let i = 1; i < list.length; i++) {
    for(let j = i-1; j>=0; j--){
      if(list[j]>list[j+1]){
        swap(j,j+1,list)
      }
    }
  }
  console.log(list)
}

Insert(list)