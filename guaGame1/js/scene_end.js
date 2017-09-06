var SceneEnd = function (game) {
  var s = {
    g: game,
  }
  // 初始化

  s.draw = function () {

    //draw labels
    game.context.fillText('游戏结束' , 10, 290)
  }
  s.update = function () {

  }
  game.registerAction('a', function () {
    paddle.moveLeft()
  })
  game.registerAction('d', function () {
    paddle.moveRight()
  })
  game.registerAction('f', function () {
    ball.fire()
  })
  // mouse event
  var enableDrag = false
  game.canvas.addEventListener('mousedown', function (event) {
    var x = event.offsetX
    var y = event.offsetY
    log('point',x,y)
    if (ball.hasPoint(x, y)) {
      enableDrag = true
    }
  })
  game.canvas.addEventListener('mousemove', function (event) {
    var x = event.offsetX
    var y = event.offsetY

    if (enableDrag) {
      log('move',x,y)
      ball.x = x
      ball.y = y
    }
  })
  game.canvas.addEventListener('mouseup', function (event) {
    var x = event.offsetX
    var y = event.offsetY
    log(x,y)
    enableDrag = false
  })
  return s
}