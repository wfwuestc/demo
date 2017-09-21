//使用发布订阅模式写一个事件管理器
var Event = (function () {
  var eventPool = {}
  function on(topicName, callback) {
    if(!eventPool[topicName]){
      eventPool[topicName] = []
    }
    eventPool[topicName].push(callback)
  }

  function fire() {
    var arg = [].slice.call(arguments)
    var topic = arg.shift()
    var callbackArg = arg
    var topicCallback = eventPool[topic]
    if(topicCallback){
      topicCallback.forEach(function (callback) {
        callback.apply(this, callbackArg)
      })
    }
  }
  function off(topic) {
    delete eventPool[topic]
  }

  return {
    on: on,
    off: off,
    fire: fire
  }
})()

Event.on('change', function(val){
  console.log('change...  now val is ' + val);
});
Event.fire('change', '饥人谷');
Event.off('change')
