function paddle(width, height) {
  var o = {
    width: width,
    height: height
  }
  o.area = o.width * o.height
  return o
}

var p = paddle(2, 1)