var classBuilder = function(obj) {
	if(typeof(obj) === 'object')
	{
		for (var v in obj.properties)
		{
			obj.constructor.prototype[v] = obj.properties[v];
		}
	
		for (var v in obj.methods)
		{
			obj.constructor.prototype[v] = obj.methods[v];
		}
		for (var v in obj.staticMembers)
		{
			obj.constructor[v] = obj.staticMembers[v];
		}
		return obj.constructor;
	}
}




