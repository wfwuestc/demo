var guaGame = function () {
  var g ={
    actions: {},
    keydowns: {},
  }
  var canvas = document.querySelector('#id-canvas');
  var context = canvas.getContext('2d');
  g.canvas = canvas
  g.context = context
  // draw
  g.drawImage = function (guaImage) {
    g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
  }
  //events
  window.addEventListener('keydown',function (event) {
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup',function (event) {
    g.keydowns[event.key] = false
  })
  //
  g.registerAction = function (key, callback) {
    g.actions[key] = callback
  }
  window.fps = 30
  //timer
  var runLoop = function () {
    log(window.fps)
    //event
    var actions = Object.keys(g.actions)
    for (var i = 0; i <actions.length; i++){
      var key = actions[i]
      if(g.keydowns[key]){
        //如果按键按下，调用注册的action
        g.actions[key]()
      }
    }
    //update
    log(g.update())
    g.update()
    //clear
    context.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    g.draw()
    // run next loop
    setTimeout(function () {
      runLoop()
    },1000/window.fps)
  }
  setTimeout(function () {
    runLoop()
  },1000/window.fps)

  return g
}