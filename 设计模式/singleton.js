var paddle = (function(){
  var paddle;
  var createPaddle = function(){
    this.width = 1;
    this.height = 2;
  };
  return {
    getPaddle: function() {
      if (!paddle) {
        paddle = new createPaddle();
      }
      return paddle;
    }
  }
})()
var p1 = paddle.getPaddle()
p1.width = 5
var p2 = paddle.getPaddle()
console.log(p2.width)