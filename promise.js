function test() {
	return new Promise(function(resolve, reject) {
		setTimeOut(() => {
			resolve('time is up')
		},1000)
	})
}
test.then(function show(m) {
	console.log(m)
})

console.log('hehe')