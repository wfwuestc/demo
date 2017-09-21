//混合模式

//构造函数box
var box = function (width, height) {
  this.width = width
  this.height = height
}
box.prototype.area = function () {
  return this.width * this.height
}

//构造函数paddle
var paddle = function (width, height, speed) {
  box.call(this, width, height) // 继承box的属性
  this.speed = speed
}

paddle.prototype = Object.create(box.prototype) // 继承box的原型
paddle.prototype.getSpeed = function () {
  console.log(this.speed)
}

var p = new paddle(2, 3, 10)
console.log(p)
