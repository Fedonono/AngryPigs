AngryPigs.Birds.Black = function() {
	AngryPigs.Bird.call(this, "black", 18, 18);
	for(var i in AngryPigs.Bird.prototype){
		if(this[i]===undefined) // s'il n'est pas défini, on le redéfinit
			this[i]=AngryPigs.Bird.prototype[i];
	}
	var compteur = 0;
	var explosion = false;
	this["shiftX"] = function() {
		this.offset.left += this.xDir;
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
				this.$element.css({backgroundPosition: '-777px -446px', width: '62px', height: '81px'});
				this.xDir = 3;
				this.yDir = 3;
				explosion = false;
			}
		}
	};
	this["shiftY"] = function() { this.offset.top += this.yDir; }; //to change
	this["changeYDirection"] = function() {
		this.yDir *= -1.03;
		console.log("lol");
		if (this.yDir > 15)
			this.$element.css({backgroundPosition: '-670px -677px', height: '75px'});
		if (this.yDir > 20) // dès qu'il arrive à une accélération trop importante, on immobilise l'oiseau et on lance un compteur pour ses étapes d'explosion et son redémarrage
		{				
			this.$element.css({backgroundPosition: '-868px -601px', width: '85px', height: '78px'});
			this.xDir = 0;
			this.yDir = 0;
			compteur = 0;
			explosion = false;
			var audio = document.createElement('audio');
			audio.src = "http://narnoxx.free.fr/angrypigs/boom.ogg"; // kikou audio
			audio.autoplay = true;
			this.element.appendChild(audio);
			console.log(this.$element);
			console.log(this.element);
			
		}
	};
	this["changeXDirection"] = function()
	{
		this.xDir *= -1.03;
	};
};

