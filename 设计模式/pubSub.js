var PubSub = function () {
  this.eventPool = {}
}
PubSub.prototype.on = function (topicName, callback) {
  if(!this.eventPool[topicName]){
    this.eventPool[topicName] = []
  }
  this.eventPool[topicName].push(callback)
}

PubSub.prototype.fire = function () {
  var arg = [].slice.call(arguments)
  var topic = arg.shift()
  var callbackArg = arg
  var topicCallback = this.eventPool[topic]
  if(topicCallback){
    topicCallback.forEach(function (callback) {
      callback.apply(this, callbackArg)
    })
  }
}

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
