var $slider1 = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', function() {
    var isOpen = $slider1.classList.contains('slide-in');
    $slider1.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});
