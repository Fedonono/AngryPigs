AngryPigs.Birds.Blue = function() {
	AngryPigs.Bird.call(this, "blue", 14, 14);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
	this["shiftX"] = function() { this.offset.left += this.xDir/6.5; };
	this["shiftY"] = function() { this.offset.top += 18*Math.sin(this.offset.left/26)+1; }; //t'avais mis 23
};

