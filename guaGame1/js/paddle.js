var Paddle = function (game) {
  var o = game.imagesByName('paddle')
  // var image = imageFromPath('img/paddle.png')
  // var o = {
  //   image: image,
  //   x: 100,
  //   y: 250,
  //   speed: 10,//加，修改方便
  // }
  o.speed = 15
  o.x = 100
  o.y = 250
  o.move = function (x) {
    if (x < 0){
      x = 0
    }
    if (x > 400 - o.w){
      x = 400 - o.w
    }
    o.x = x
  }
  o.moveLeft = function () {
    o.move(o.x - o.speed)
  }
  o.moveRight = function () {
    o.move(o.x + o.speed)
  }
  var aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
  }
  o.collide = function (ball) {
    // if (Math.min(ball.x + ball.image.width, o.x + o.image.width) > Math.max(ball.x, o.x)
    //     && Math.min(ball.y + ball.image.height, o.y + o.image.height) > Math.max(ball.y, o.y)){
    //     return true
    //   }else {
    //   return false
    // }
    var a = o
    var b = ball
    if (aInb(a.x, b.x, b.x + b.w)||aInb(b.x, a.x, a.x+a.w)){
      if(aInb(a.y, b.y, b.y + b.h)||aInb(b.y, a.y, a.y+a.h)){
        return true
      }
    }
    return false
  }
  return o
}