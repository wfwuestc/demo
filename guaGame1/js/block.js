var Block = function (game, position) {
  // positon 是 [0, 0] 格式
  var img = game.imagesByName('block')
  var p = position
  var o = {

    x: p[0],
    y: p[1],
    alive: true,
    lives: p[2] || 1,//加，修改方便
  }
  o.image = img.image
  o.w = img.width
  o.h = img.height
  o.kill = function () {
    o.lives -= 1
    if(o.lives < 1){
      o.alive = false
    }

  }
  o.collide = function (b) {
    return (rectIntersects(o, b)||rectIntersects(b, o)) && o.alive
  }
  return o
}