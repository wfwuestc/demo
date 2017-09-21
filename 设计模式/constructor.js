//构造函数
// 函数体内部使用了this关键字，代表了所要生成的对象实例。
// 生成对象的时候，必需用new命令，调用Vehicle函数。

function paddle(width, height) {
  this.width = width
  this.height = height
  this.area = width * height
}

new paddle(1, 2)