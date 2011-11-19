AngryPigs.Birds.Blue = function() {
	AngryPigs.Bird.call(this, "blue", 14, 14);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
};

