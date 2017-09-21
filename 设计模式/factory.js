// 工厂模式
function paddle(width, height) {
  // 创建对象
  var o = {
    width: width,
    height: height
  }
  o.area = o.width * o.height
  // 返回创建对象
  return o
}

var p = paddle(2, 1)