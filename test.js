function _each(obj, callback) {
	var keys = Object.keys(obj)

	if(Array.isArray(obj)){
		return obj.forEach(callback)
	}
	return keys.forEach(function(item) {
		callback(item, obj[item])
	})
}

_each([1,2,3], function (it, index) {
	// body...
	console.log(it + index)
})
_each({a:'b', c:'d'}, function (key, value) {
	// body...
	console.log(key + value)
})