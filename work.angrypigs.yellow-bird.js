AngryPigs.Birds.Yellow = function() {
	AngryPigs.Bird.call(this, "yellow", 6, 6);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
};

