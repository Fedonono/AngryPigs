AngryPigs.Birds.Big = function() {
	AngryPigs.Bird.call(this, "big", 22, 22);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
};

