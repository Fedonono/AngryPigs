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
  AngryPigs.maxBirds = 3;
  
  /**
   * Construct a randomly chosen type of bird
   */
  AngryPigs.constructRandomBird = function() {
    // Choose a bird constructor randomly
    //var birdConstructor = this.birdsArray[Math.ceil(this.birdsArray.length * Math.random()) - 1];
    var birdConstructor = this.birdsArray[Math.ceil(2*Math.random())];
    
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
