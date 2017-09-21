var paddle = (function(){
  var width = 2
  var height = 3

  return {
    width: width,
    height: height,
    area: width * height
  }
})()

console.log(paddle.width, paddle.height, paddle.area)