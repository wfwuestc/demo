var guaGame = function (images, callback) {
  // images 参数是一个对象，里面是图片的名字和路径
  // 程序是在所有图片载入成功后才运行
  var g ={
    scene: null,
    actions: {},
    keydowns: {},
    images: {}
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
  g.update = function () {
    g.scene.update()
  }
  g.draw = function () {
    g.scene.draw()
  }
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

  //
  var loads = []
  // 预先载入所有图片
  var names = Object.keys(images)
  for (var i = 0; i < names.length; i++) {
    let name = names[i]
    var path = images[name]
    let img = new Image()
    img.src = path
    img.onload = function () {
      //存入 images 中
      g.images[name] = img
      //所以图片都成功之后调用run
      loads.push(1)
      if (loads.length === names.length){
        g.run()
      }
    }
  }
  g.imagesByName = function (name) {
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image
  }
  g.replaceScene = function (scene) {
    g.scene = scene
    
  }
  g.runWithScene = function (scene) {
    g.scene = scene
  }
  g.run = function () {
    callback(g)

    setTimeout(function () {
      runLoop()
    },1000/window.fps)
  }
  //开始运行程序


  return g
}