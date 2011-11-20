AngryPigs.Birds.White = function() {
	AngryPigs.Bird.call(this, "white", 2, 2);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // si il n'est pas défini, on le redéfini
			this[i]=AngryPigs.Bird.prototype[i];
	}
	this["shiftX"] = function() { this.offset.left += this.xDir*(Math.random()*2); };
	this["shiftY"] = function() { this.offset.top += this.yDir*(Math.random()*2);; };
	var coup = 0; //combien l'oiseau se prend de coup en volant trop haut
	this["move"] = function() {
		if (!this.element)
		  return;
		
		this.shiftX();
		if (this.closeToLeft()) {
		  this.changeXDirection();
		  this.shiftToLeft();
		}
		if (this.closeToRight()) {
		  this.changeXDirection();
		  this.shiftToRight();
		}
		  
		this.shiftY();
		if (this.closeToTop()) {
		  coup++;
		  if (coup == 1) // plus il se prend le plafond, plus il souffre :(
			this.$element.css({backgroundPosition: '-410px -450px'});
		  if (coup == 2)
			this.$element.css({backgroundPosition: '-498px -353px'});
		  if (coup == 3)
			this.$element.css({backgroundPosition: '-408px -636px', height: '89px'});
		  if (coup == 4)
			this.$element.css({backgroundPosition: '-669px -752px', width:'52px', height: '68px'});
		  if (coup == 5)
			this.$element.css({backgroundPosition: '-667px -818px', width:'46px', height: '60px'});
		  if (coup > 5)
			AngryPigs.removeBird(this);

		  this.changeYDirection();
		  this.shiftToTop();
		}
		if (this.closeToBottom()) {
		  this.changeYDirection();
		  this.shiftToBottom();
		}
		  
		this.$element.offset(this.offset);
	}
};

