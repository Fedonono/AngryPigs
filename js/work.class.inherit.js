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
