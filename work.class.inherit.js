classBuilder.constructor.prototype.inherit = function (someone){ // changer le nom de l'argument
	if(typeof(someone) === 'function')
	{
		for(var i in someone.prototype)
		{
			if(this.prototype[i]===undefined) // si il n'est pas défini, on le redéfini
			{
					this.prototype[i]=someone.prototype[i];
			}
		}
	}
	return this;
};
/*
var Hobbit = classBuilder({
  constructor: function(name, s) {
	  this.name = name;
  },
  properties: {
    bigStomach: []
  },
  methods: {
    sayHello: function() {  },
    eatSomething: function(something) {  }
  },
  staticMembers: {
    creator: new Being('J.R.R. Tolkien'),
    getMeals: function() {  }
  }
}).inherit(Being);



/* ******** test ******* */


var frodo = new Hobbit('frodo');
console.log(frodo.name);          // inherited from Being
console.log(frodo.bigStomach);
frodo.sayHello();                 // inherited from Being
frodo.eatSomething('bread');
console.log(Hobbit.creator);
console.log(Hobbit.getMeals);
*/
