array1 = [1,2,3,4,5]
array2 = [4,5,6,7,8,9]

function distinctBySortArray(arr1,arr2) {
  arr = []
  if(arr1[0] < arr2[0]){
    for(var i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[0]){
        arr = [].concat(arr1.slice(0,i),arr2)
        break
      }
    }
  }else if(arr1[0] > arr2[0]){
    for(var i = 0; i < arr2.length; i++){
      if(arr2[i] === arr1[0]){
        arr = arr2.slice(0,i).concat(arr1)
        break
      }
    }
  }

  return arr
}

console.log(distinctBySortArray(array1,array2))