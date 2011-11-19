AngryPigs.Birds.Black = function() {
	AngryPigs.Bird.call(this, "black", 18, 18);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
};

