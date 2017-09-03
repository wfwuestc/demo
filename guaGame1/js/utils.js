var log = console.log.bind(console)
var imageFromPath = function (path) {
  var img = new Image();
  img.src = path
  return img
}

var rectIntersects = function (a, b) {
  if (Math.min(a.x + a.image.width, b.x + b.image.width) > Math.max(a.x, b.x)
      && Math.min(a.y + a.image.height, b.y + b.image.height) > Math.max(a.y, b.y)){
    log('block 相撞')
    return true
  }
  return false
}
