// * When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$(function(){
    //variable for rotation degree of the letters
    var rotate = -90;
    var rotatedangling = -80;
    // $("#slanting a").lettering('lines').children("span").css({'display':'inline-block', '-webkit-transform':'rotate('+rotate+'deg)'});
    // $( "#dropd" ).css( "border", "3px solid red" );

     // jQuery methods go here...
     $(document).mousemove(function(event){
       //convert the range of the mouse X to -90 , 90 slant
       //words only
        rotate = convertToRange(event.pageX,  [0, $( document ).width()], [0, 10]);
        // console.log(rotate);
        // $("#slanting a").lettering('lines').children("span").css({'display':'inline-block', '-webkit-transform':'rotate('+rotate+'deg)', 'background-color': 'black', 'color':'white', 'border-radius':'10px'});
        $( "#dropd" ).css( {'display':'inline-block', '-webkit-transform':'rotate('+rotate+'deg)'});

        //sentences
        // rotatedangling = convertToRange(event.pageX,  [0, $( document ).width()], [50, 150]);
        // $(".dangling").lettering('lines').children("span").css({ 'display':'inline-block', '-webkit-transform':'rotate('+rotatedangling+'deg)'});
      });

  //function to convert range
      function convertToRange(value, srcRange, dstRange){
        // value is outside source range return
        if (value < srcRange[0] || value > srcRange[1]){
          return NaN;
        }
        var srcMax = srcRange[1] - srcRange[0],
            dstMax = dstRange[1] - dstRange[0],
            adjValue = value - srcRange[0];
        return (adjValue * dstMax / srcMax) + dstRange[0];

      }


  });
