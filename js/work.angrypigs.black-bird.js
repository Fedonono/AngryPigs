(AngryPigs.Birds.Black = function() {
	AngryPigs.Bird.call(this, "black", 18, 18);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // s'il n'est pas défini, on le redéfinit
			this[i]=AngryPigs.Bird.prototype[i];
	}
	var audio = document.createElement('audio');
	audio.src = "http://narnoxx.free.fr/angrypigs/boom.ogg"; // kikou audio
	this.element.appendChild(audio);
	var compteur = 0;
	var explosion = false;
	this["shiftX"] = function() {
		this.offset.left += this.xDir/2;
		compteur += 1;
		if (this.xDir === 0 && compteur > 5)
		{
			if (!explosion) // si on n'a pas encore fait la deuxième partie de l'explosion
			{
				this.$element.css({backgroundPosition: '-912px -258px', width: '98px', height: '93px'});
				explosion = true;
				compteur = 0;
			}
			else // si tout est finit, on le redémarre
			{
				explosion = false;
				AngryPigs.removeBird(this);
			}
		}
	};
	this["shiftY"] = function() { this.offset.top += this.yDir/2; };
	this["changeYDirection"] = function() {
		this.yDir = (this.yDir*2*Math.random())*-1;
	};
	this["changeXDirection"] = function()
	{
		if (this.xDir > 20)
			this.$element.css({backgroundPosition: '-650px -445px', height: '82px'});
		if (this.xDir > 25) // dès qu'il arrive à une accélération trop importante, on immobilise l'oiseau et on lance un compteur pour ses étapes d'explosion et son redémarrage
		{				
			//this.$element.css({backgroundPosition: '-868px -601px', width: '85px', height: '78px'});
			this.$element.css({backgroundPosition: '-673px -353px', width: '90px', height: '89px'}); // explosion + belle
			this.xDir = 0;
			this.yDir = 0;
			compteur = 0;
			explosion = false;
			this.element.firstChild.play();
			
		}
		this.xDir *= -1.05;
	};
})();

