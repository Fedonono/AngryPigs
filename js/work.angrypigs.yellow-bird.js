(AngryPigs.Birds.Yellow = function() {
	AngryPigs.Bird.call(this, "yellow", 6, 6);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
	this["changeXDirection"] = function()
	{
		if (this.xDir > 20)
			this.$element.css({backgroundPosition: '-729px -743px', width:'61px', height: '56px'});
		if (this.xDir > 25)
			this.$element.css({backgroundPosition: '-855px -743px', width:'80px', height: '55px'});
		if (this.xDir > 30)
		{
			this.$element.css({backgroundPosition: '-790px -743px', width:'61px', height: '56px'});
			this.xDir = 0.05;
			this.yDir = 4;
		}
		this.xDir *= -1.3
	}
})();

