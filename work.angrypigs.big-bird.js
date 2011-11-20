AngryPigs.Birds.Big = function() {
	AngryPigs.Bird.call(this, "big", 22, 22);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
	var compteur = 0;
	this["shiftX"] = function() {
		compteur++;
		this.offset.left += this.xDir/6.5;
		if (compteur % 2 === 0)
			this.$element.css({backgroundPosition: '-814px -255px'});
		else
			this.$element.css({backgroundPosition: '-634px -156px'});
	};
	this["shiftY"] = function() { this.offset.top += 23*Math.cos(this.offset.left/26); };
};

