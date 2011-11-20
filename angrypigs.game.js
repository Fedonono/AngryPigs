/**
 * Main game object
 */
(function() {
  window.AngryPigs = {};
  
  // Common public properties
  AngryPigs.board = $('#game');
  AngryPigs.level = $('#level');
  AngryPigs.score = $('#score');
  AngryPigs.offset = AngryPigs.board.offset();
  AngryPigs.dimensions = {
    height: AngryPigs.board.height(),
    width: AngryPigs.board.width()
  };
  // Available bird types
  AngryPigs.Birds = {};
  
  // On game birds
  AngryPigs.birds = [];
  // Maximum bird on the board
  AngryPigs.maxBirds = 10;
  
  /**
   * Construct a randomly chosen type of bird
   */
  AngryPigs.constructRandomBird = function() {
    // Choose a bird constructor randomly
    var birdConstructor = this.birdsArray[Math.ceil(this.birdsArray.length * Math.random()) - 1];
    
    return new birdConstructor();
  };
  
  /**
   * Add a bird into the game
   */
  AngryPigs.addBird = function() {
    if (this.birds.length > this.maxBirds) {
      return;
    }
    
    var bird = this.constructRandomBird();
    
    // Add the bird in memory
    this.birds.push(bird);
    
    // Add the bird in into the board and start movement
    this.board.append(bird.element);
    bird.init();
    bird.intervalId = setInterval(bird.move.bind(bird), 35);
  };
  
  /**
   * Remove a bird from the game
   * Based on John Resig Array.remove
   */
  AngryPigs.removeBird = function(bird) {
    // Remove bird from board
    clearInterval(bird.intervalId);
    bird.$element.remove();
  
    // Remove bird from memory
    var idx = this.birds.indexOf(bird);
    var rest = this.birds.slice(idx + 1 || this.birds.length);
    this.birds.length = idx < 0 ? this.birds.length + idx : idx;
    this.birds.push.apply(this.birds, rest);
  };
  
  /**
   * Callback when a bird has been clicked on
   */
  AngryPigs.birdClicked = function(e) {
    AngryPigs.removeBird(e.target.bird);
    var score = parseInt($('#score').html()); // have to convert in number
    $('#score').html(score+1);
    if (score % 5 === 0)
    {
		var level = parseInt($('#level').html());
		level = level+1;
		$('#level').html(level);
		if (level === 3)
			$('#game').css("cursor", "url('http://narnoxx.free.fr/angrypigs/nyan-cat.cur'), pointer");
		if (level === 4)
		{ // j'ai pris la random color de : http://benwatts.ca/sandbox/jquery-colourific/, j'aurai pu moi même faire une fonction avec des couleurs de bases mais j'ai trouvé son code épique.
			// setupColourific
			function setupColourific(){
				var elementToChange = $("body"); // the element that's changing
				changeColour(elementToChange);
				window.setInterval( function(){changeColour(elementToChange)}, 500);
			}

			// changeColour
			function changeColour(e){

				// random values between 0 and 255, these are the 3 colour values
				var r = Math.floor(Math.random()*256);
				var g = Math.floor(Math.random()*256);
				var b = Math.floor(Math.random()*256);

				// change the text colour of this element
				console.log(e);
				console.log(e.hide());
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
			audio.src = "http://narnoxx.free.fr/angrypigs/nyancat.ogg";
			$('#game')[0].appendChild(audio);
			var nyanCat = document.getElementById('nyanCat');
			if (typeof audio.loop == 'boolean')
			{
				$('#nyanCat')[0].loop = true;
			}
			else {
				$('#nyanCat')[0].addEventListener('ended', function() { //obligé sous firefox, le loop foire :(
					this.currentTime = 0;
					this.play();
				}, false);
			}
			$('#nyanCat')[0].play();
		}
	}
  };

  /**
   * Listen for clicks on birds
   */
  AngryPigs.board.delegate('.bird', 'click', function(e) {
    AngryPigs.birdClicked.call(this, e);
  });

  /**
   * Resets board offset on resize
   */
  $(window).resize(function(e) {
    AngryPigs.offset = AngryPigs.board.offset();
  });

  /**
   * Init function();
   */
  AngryPigs.init = function(e) {
    this.intervalId = setInterval(AngryPigs.addBird.bind(AngryPigs), 500);
  };

  /**
   * Start the game once every scripts has been loaded
   * it also inits the birdsArray property
   */
  $(window).load(function(e) {
    AngryPigs.init();
    
    // Transform this.Birds into an array
    AngryPigs.birdsArray = [];
    for (var Bird in AngryPigs.Birds) {
      if (AngryPigs.Birds.hasOwnProperty(Bird)) {
        AngryPigs.birdsArray.push(AngryPigs.Birds[Bird]);
      }
    }
  });
})();

		
