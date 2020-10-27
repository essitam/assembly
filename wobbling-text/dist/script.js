$(document).ready(function() {
	var FLAG_wobblyness = 10; //range of movement from centre
	var FLAG_intervalRate = 150;
	var $wobblyText = $('.wobblyText');
	var wobblyTextSpans = '.wobblyText span';

	var interval = 0;

	init();

	/***** startup stuff ******/

	function init() {
		var wobbleHTML = addSpans(splitString($wobblyText.text()));
		replaceWobbleTextHTML(wobbleHTML);

		interval = setInterval(intervalFunction, FLAG_intervalRate);
	}

	//split string into array
	function splitString(strInput) {
		return strInput.trim().split("");
	}

	//make a string of each character inside a span
	function addSpans(arrInput) {
		var strInputSpans = '';

		function addSpan(charInput) {
			strInputSpans += '<span>' + charInput + '</span>';
		}

		arrInput.forEach(addSpan);

		return strInputSpans;
	}

	/***** element HTML & CSS modification ******/

	function setWobbleCSS($element, top, left) {
		$element.css('top', top);
		$element.css('left', left);
	}

	function replaceWobbleTextHTML(strInputHTML) {
		$wobblyText.html(strInputHTML);
	}

	/***** maths ******/

	//return random number within range min and max
	function intRandomRange(range) {
		return (Math.random() * (range * 2)) - range;
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