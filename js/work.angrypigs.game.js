(AngryPigs.birdClicked = function(e) {
AngryPigs.removeBird(e.target.bird);
    var score = parseInt($('#score').html()); // have to convert in number
    $('#score').html(score+1);
    if (score % 2 === 0)
    {
		var level = parseInt($('#level').html());
		level = level+1;
		$('#level').html(level);
		if (level === 3)
			$('#game').css("cursor", "url('./style/images/nyan-cat.cur'), pointer");
		if (level === 4)
		{ // random color : http://benwatts.ca/sandbox/jquery-colourific/
			// setupColourific
			function setupColourific(){
				var elementToChange = $("body"); // the element that's changing
				changeColour(elementToChange);
				window.setInterval( function(){changeColour(elementToChange)}, 1000);
			}

			// changeColour
			function changeColour(e){

				// random values between 0 and 255, these are the 3 colour values
				var r = Math.floor(Math.random()*256);
				var g = Math.floor(Math.random()*256);
				var b = Math.floor(Math.random()*256);

				// change the text colour of this element
				e.hide().css("background", getHex(r,g,b)).fadeIn("fast");

			}

			// intToHex()
			function intToHex(n){
				n = n.toString(16);
				// eg: #0099ff. without this check, it would output #099ff
				if( n.length < 2)
				n = "0"+n;
				return n;
			}

			// getHex()
			// shorter code for outputing the whole hex value
			function getHex(r, g, b){
				return '#'+intToHex(r)+intToHex(g)+intToHex(b);
			}
			setupColourific();
		}
		if (level === 5)
		{
			var audio = document.createElement('audio');
			audio.id = "nyanCat";
			audio.src = "./ressources/nyancat.ogg";
			$('#game')[0].appendChild(audio);
			var nyanCat = document.getElementById('nyanCat');
			if (typeof audio.loop == 'boolean')
			{
				nyanCat.loop = true;
			}
			else {
				nyanCat.addEventListener('ended', function() { //obligé sous firefox, le loop foire :(
					this.currentTime = 0;
					this.play();
				}, false);
			}
			nyanCat.play();
		}
		if ((level > 5) && (level%6 === 0)) {
			$('#game').addClass('barrel_roll');
			setTimeout(function(){
				$('#game').removeClass('barrel_roll');
			},4000);
		}
	}
})();
