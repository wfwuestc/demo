var box = function (width, height) {
  this.width = width
  this.height = height
}
box.prototype.area = function () {
  return this.width * this.height
}

var paddle = function (width, height, speed) {
  box.call(this, width, height)
  this.speed = speed
}

paddle.prototype = Object.create(box.prototype)
paddle.prototype.getSpeed = function () {
  console.log(this.speed)
}

var p = new paddle(2, 3, 10)
console.log(p)
