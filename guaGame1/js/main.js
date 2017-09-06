var loadLevel = function(game, n) {
  n = n - 1
  var level = levels[n]
  var blocks = []
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var b = Block(game, p)
    blocks.push(b)
  }
  return blocks
}

var enableDebugMode = function (game, enable) {
  if(!enable) {
    return
  }
  window.addEventListener('keydown',function (event) {
    var k = event.key
    if (k == 'p'){
      // 暂停功能
      window.pause = !window.pause
    } else if ('12345678'.includes(k)) {
      // 选择关卡
      blocks = loadLevel(game, Number(k))
    }
  })
  // 控制速度
  document.querySelector('#input-speed').addEventListener('input', function () {
    var input = event.target
    window.fps = Number(input.value)
  })
}
var __main = function () {




  var images = {
    ball: 'img/ball.png',
    block: 'img/block.png',
    paddle: 'img/paddle.png',
  }

  var game = guaGame(images, function (g) {
    var s = Scene(g)
    g.runWithScene(s)
  })

  enableDebugMode(game, 1)

}

__main()