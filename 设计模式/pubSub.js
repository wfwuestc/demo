//订阅发布

// 创建事件池
var PubSub = function () {
  this.eventPool = {}
}
// 注册事件极其回调函数
PubSub.prototype.on = function (topicName, callback) {
  // 若事件第一次注册则创建一个空数组
  if(!this.eventPool[topicName]){
    this.eventPool[topicName] = []
  }
  //将回调函数推送到事件对应的数组中,事件池结构如下
  // eventPool = {
  //   topicName: [callback,]
  // }
  this.eventPool[topicName].push(callback)
}

// 调用事件
PubSub.prototype.fire = function () {
  // 使用空数组来调用数组方法
  var arg = [].slice.call(arguments)
  // 取出事件，即第一个参数
  var topic = arg.shift()
  // 取出事件后剩下的即为回调函数参数
  var callbackArg = arg
  // 调出事件对应的回调函数数列
  var topicCallback = this.eventPool[topic]
  if(topicCallback){
    topicCallback.forEach(function (callback) {
      callback.apply(this, callbackArg)
    })
  }
}

// 清除注册事件
PubSub.prototype.off = function (topic) {
  delete this.eventPool[topic]
}



var paddle = new PubSub()
paddle.on('width', function () {
  this.width = 2
})

paddle.on('width', function () {
  console.log(this.width)
})

paddle.fire('width')
