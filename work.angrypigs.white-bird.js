AngryPigs.Birds.White = function() {
	AngryPigs.Bird.call(this, "white", 2, 2);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
};

