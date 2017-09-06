var Scene = function (game) {
  var s = {
    g: game,
  }
  // 初始化
  var paddle = Paddle(game)
  var ball = Ball(game)

  var score = 0

  var blocks = loadLevel(game, 1)

  s.draw = function () {
    // 画背景
    game.context.fillStyle = "grey"
    game.context.fillRect(0, 0, 400, 300)
    // 画挡板
    game.drawImage(paddle)
    game.drawImage(ball)
    for (var i = 0; i < blocks.length; i++){
      var block = blocks[i]
      if (block.alive){
        game.drawImage(block)
      }
    }
    //draw labels
    game.context.fillText('分数：' + score, 10, 290)
  }
  s.update = function () {
    if (window.pause){
      return
    }
    ball.move()
    //判断游戏结束
    if(ball.y > paddle.y){
      // 跳转到游戏结束的场景
      var end = SceneEnd(game)
      game.replaceScene(end)
    }
    //判断相撞
    if (paddle.collide(ball)){
      ball.bounce()
    }
    for (var i = 0; i < blocks.length; i++){
      var block = blocks[i]
      var isCollide = block.collide(ball)
      //判断ball和block相撞
      if (isCollide) {
        block.kill()
        ball.bounce()
        //更新分数
        score += 1
      }
    }
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