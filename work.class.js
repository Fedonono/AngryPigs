var classBuilder = function(obj) {
	function addInfo(member)
	{
		for (var v in member)
			this.v = member[v];
	}

	function addPrototypeInfo(member)
	{
		for (var v in member)
			this.prototype.v = member[v];
	}
	console.log(obj.properties);
	addInfo(obj.properties).call(obj.constructor);
	addInfo(obj.methods).call(obj.constructor);
	addPrototypeInfo(obj.staticMembers).call(obj.constructor);
	console.log(obj.constructor);
	return obj.constructor;
}


var Being = classBuilder({
    constructor: function(aName) {
		this.name = aName;
    },
    properties: {
		lives: true
    },
    methods: {
		sayHello: function() { /* Some code */ }
    },
    staticMembers: {
		creator: 'Chuck Norris',
		fromArray: function(namesArray) { /* Some code */ }
    }
});

/* old version 
function addInfo(member)
{
	for (var v in member)
		this.v = member[v];
}



var classBuilder = function(obj) {
	function addProperties()
	{
		for (var v in obj.properties)
		{
			this.v = obj.properties[v];
			console.log(v);
		}
	}
	function addMethods()
	{
		for (var v in obj.methods)
		{
			this.v = obj.methods[v];
			console.log(v);
		}
	}
	function addStaticMembers()
	{
		for (var v in obj.staticMembers)
		{
			this.prototype.v = obj.staticMembers[v];
			console.log(v);
		}
	}
	addProperties.call(obj.constructor);
	addMethods.call(obj.constructor);
	addStaticMembers.call(obj.constructor);
	console.log(obj.constructor);
        return obj.constructor;
}

 * */
