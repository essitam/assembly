$(document).ready(function() {
	var FLAG_wobblyness = 30; //range of movement from centre
	var FLAG_intervalRate = 200;
	var $wobblyText = $('.wobblyText');
	var wobblyTextSpans = '.wobblyText span';

	var interval = 0;

	init();

	/***** startup stuff ******/

	function init() {
		$(".wobblyText").lettering().children("span");
		interval = setInterval(intervalFunction, FLAG_intervalRate);
	}

	/***** element HTML & CSS modification ******/

	function setWobbleCSS($element, top, left) {
		$element.css('top', top);
		$element.css('left', left);
	}

	/***** maths ******/

	//return random number within range min and max
	function intRandomRange(range) {
		return (Math.random() * (range * 1)) - range;
	}

	/***** main loop ******/

	function intervalFunction() {
		$(wobblyTextSpans).each(function(index) {
			setWobbleCSS(
				$(this),
				intRandomRange(FLAG_wobblyness),
				intRandomRange(FLAG_wobblyness)
			);
		});
	}
});

$( "p" ).click(function() {
  $( this ).toggleClass( "wobblyText" );
});
