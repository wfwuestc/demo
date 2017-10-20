var log = console.log.bind(console)
var memoizer = function (meno, fundamental) {
  var shell = function (n) {
    var result = meno[n]
    if (typeof result !== 'number') {
      result = fundamental(shell, n)
      meno[n] = result
    }
    return result
  }
  return shell
}
var facrorial = memoizer([0, 1], function (shell, n) {
  return shell(n-1)+shell(n-2)
})

log(facrorial(3))