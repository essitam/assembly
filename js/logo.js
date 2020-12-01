var arr = ['images/logo/logo1.png', 'images/logo/logo2.png', 'images/logo/logo3.png', 'images/logo/logo4.png', 'images/logo/logo5.png', 'images/logo/logo6.png','images/logo/logo7.png', 'images/logo/logo8.png'];
var i = 0;
var search = document.getElementById('logo');

function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we've gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
}

function nextLogo(){
  console.log('nice');
  var i = 0;
    var search = document.getElementById('logo');
    search.src =
    search.src = nextItem();
}

window.addEventListener('load', function () {
    search.src = arr[0]; // initial value
    document.getElementById('logo').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            search.src = nextItem();
        }
    );
});
