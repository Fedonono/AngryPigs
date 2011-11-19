AngryPigs.Birds.Red = function() {
	AngryPigs.Bird.call(this, "red", 13.5, 10);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
};
