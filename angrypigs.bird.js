/**
 *  Bird constructor
 */
AngryPigs.Bird = function(aClassName, aXDir, aYDir) {
  // DOM reference
  this.element = document.createElement('div');
  this.element.bird = this;
  this.className = aClassName;
  
  // jQuery DOM reference
  this.$element = $(this.element);
  this.$element.addClass('bird');
  this.$element.addClass(this.className);
  
  // Direction shifts
  this.xDir = aXDir || 0, this.yDir = aYDir || 0;
  
  // Interval id, needed to cancel move
  this.intervalId = null;
};

AngryPigs.Bird.prototype = {
  /**
   * Check if the bird is close to a border
   * Returns true or false
   */
  closeToTop: function() {
    return 0 > this.offset.top - AngryPigs.offset.top;
  },
  closeToRight: function() {
    return this.offset.left - AngryPigs.offset.left > AngryPigs.dimensions.width - this.dimensions.width;
  },
  closeToBottom: function() {
    return this.offset.top - AngryPigs.offset.top > AngryPigs.dimensions.height - this.dimensions.height;
  },
  closeToLeft: function() {
    return 0 > this.offset.left - AngryPigs.offset.left;
  },

  /**
   * Shift the bird close to a border
   */
  shiftToTop: function() {
    this.offset.top = AngryPigs.offset.top + 1;
  },
  shiftToRight: function() {
    this.offset.left = AngryPigs.offset.left + AngryPigs.dimensions.width - this.dimensions.width - 1;
  },
  shiftToBottom: function() {
    this.offset.top = AngryPigs.offset.top + AngryPigs.dimensions.height - this.dimensions.height - 1;
  },
  shiftToLeft: function() {
    this.offset.left = AngryPigs.offset.left + 1;
  },

  /**
   * Shift the bird in a direction using its xDir/yDir properties
   */
  shiftX: function() {
    this.offset.left += this.xDir;
  },
  shiftY: function() {
    this.offset.top += this.yDir;
  },

  /**
   * Change a direction of the bird to the opposite
   */
  changeXDirection: function() {
    this.xDir *= -1;
  },
  changeYDirection: function() {
    this.yDir *= -1;
  },

  /**
   * Init the bird into the game
   */
  init: function() {
    // Offset relative browser origin
    this.offset = this.$element.offset();
  
    // Dimensions of the element
    this.dimensions = {
      height: this.$element.height(),
      width: this.$element.width()
    };
  },

  /**
   * Start bird movements
   */
  move: function() {
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
      this.changeYDirection();
      this.shiftToTop();
    }
    if (this.closeToBottom()) {
      this.changeYDirection();
      this.shiftToBottom();
    }
      
    this.$element.offset(this.offset);
  }

}